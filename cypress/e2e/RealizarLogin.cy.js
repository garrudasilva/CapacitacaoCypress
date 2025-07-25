import Login from '../support/Pages/Login'
import Produtos from '../support/Pages/Produtos'
describe('Realizar Login',() =>{

    it("Realizar Login com sucesso",() => {
         Login.acessarURL()
         Login.preenherUsername('standard_user')
         Login.preencherPassword('secret_sauce')
         Login.clicarEmLogin()
         Produtos.validarLabelProdutos()
    })

    it("Realizar Login sem informar a senha",() => {
         Login.acessarURL()
         Login.preenherUsername('standard_user')
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Password is required')
         Login.validarComContains('Password is required')
    })

    it.only("Realizar Login sem informar o usuario",() => {
         Login.acessarURL()
         Login.preencherPassword('secret_sauce')
         Login.clicarEmLogin()
         Login.validarMensagemDeErro('Epic sadface: Username is required')
         Login.validarComContains('Username is required')
    })
})