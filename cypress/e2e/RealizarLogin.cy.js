//import { before } from 'mocha'
import Login from '../support/Pages/Login'
import Produtos from '../support/Pages/Produtos'

describe('Realizar Login',() =>{
    beforeEach(()=>{
          Login.acessarURL()
    })
     
    it("Realizar Login com sucesso",() => {
         Login.preenherUsername('standard_user')
         Login.preencherPassword('secret_sauce')
         Login.clicarEmLogin()
         Produtos.validarLabelProdutos()
    })

    it("Realizar Login sem informar a senha",() => {
         Login.preenherUsername('standard_user')
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Password is required')
         Login.validarComContains('Password is required')
    })

    it("Realizar Login sem informar o usuario",() => {
         Login.preencherPassword('secret_sauce')
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Username is required')
         Login.validarComContains('Username is required')
    })
})