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
          Login.acessarURL('/')
          cy.url().should('include', 'saucedemo')
    })
     
    it("Realizar Login com sucesso", function(){
         Login.preenherUsername(this.credenciaisExt.users.standard)
         Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
         Login.clicarEmLogin()
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

    it.only("Realizar compra com sucesso", function(){
         Login.preenherUsername(this.credenciaisExt.users.standard)
         Login.preencherPassword(this.credenciaisExt.passwords.password_valido)
         Login.clicarEmLogin()
         Produtos.validarLabelProdutos()
         cy.get('button[class="btn_primary btn_inventory"]').first().click()
         // clicando no carrinho
         cy.get('a[class="shopping_cart_link fa-layers fa-fw"]').click()
         cy.get('a[class="btn_action checkout_button"]').click()
         cy.get('#first-name').type(destinatarioFaker.firstName)
         cy.get('#last-name').type(destinatarioFaker.lastName)
         cy.get('#postal-code').type(destinatarioFaker.zipCode)
         cy.get('input[class="btn_primary cart_button"]').click()
         cy.get('a[class="btn_action cart_button"]').click()
         cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
         
    })
})