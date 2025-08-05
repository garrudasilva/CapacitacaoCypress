/// <reference types='cypress' />
//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Produtos from '../support/Pages/Produtos'
import {criarDestinatario} from '../support/Factories/destinatario.js'

describe('Realizar Login', function(){
    const credenciaisObj ={
     standard: "standard_user",
     locked: "locked_out_user",
     password: "secret_sauce"
    }

    before(function(){
          cy.fixture('credenciaisFixture').then((dados)=>{
               this.credenciaisExt = dados
          })
    })

    beforeEach(function(){
          Login.acessarURL('https://www.saucedemo.com/v1/')
          cy.url().should('include', 'saucedemo')
    })
     
    it.only("Realizar Login com sucesso", function(){
     //     Login.preenherUsername(this.credenciaisExt.users.standard)
     //     Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
     //     Login.clicarEmLogin()
         cy.realizarLogin(this.credenciaisExt.users.standard, this.credenciaisExt.passwords.password_valido)
         Produtos.validarLabelProdutos()
    })

    it("Realizar Login sem informar a senha", function(){
         Login.preenherUsername(credenciaisObj.standard)
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Password is required')
         Login.validarComContains('Password is required')
    })

    it("Realizar Login sem informar o usuario", function(){
         Login.preencherPassword(credenciaisObj.password)
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Username is required')
         Login.validarComContains('Username is required')
    })

    const destinatarioFaker = criarDestinatario()

    it("Realizar compra com sucesso", function(){
         Login.preenherUsername(this.credenciaisExt.users.standard)
         Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
         Login.clicarEmLogin()
         Produtos.validarLabelProdutos()
         //cy.get('button[class="btn_primary btn_inventory"]').first().click()

         let elIndex = Cypress._.random(0, 5)
         cy.log(`Número: ${elIndex}`)

         cy.get('button[class="btn_primary btn_inventory"]').eq(elIndex)
     
     //     cy.get('button[class="btn_primary btn_inventory"]').each(($btn, $index)=>{
     //           if($index === elIndex){
     //                cy.wrap($btn).click()
     //           }
     //     })
         // clicando no carrinho
         cy.get('a[class="shopping_cart_link fa-layers fa-fw"]').click()
         cy.validarCSS('div[class="subheader"]', 'color', 'rgb(255, 255, 255)')
         cy.validarCSS('a[class="btn_action checkout_button"]', 'background-color', 'rgb(226, 35, 26)')
         cy.get('a[class="btn_action checkout_button"]').click()

         cy.informarDestinatario(destinatarioFaker.firstName, destinatarioFaker.lastName, destinatarioFaker.zipCode)
         cy.get('input[class="btn_primary cart_button"]').click()
         cy.get('a[class="btn_action cart_button"]').click()
         cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
         
    })
})