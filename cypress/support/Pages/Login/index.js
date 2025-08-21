const el = require('./elements').ELEMENTS
class Login {

    acessarURL() {
        cy.visit(el.url)
    }

    preencherUsername(username) {
        cy.get(el.campoUsername).type(username)
    }

    preencherPassword(password) {
        cy.get(el.campoPassword).type(password)
    }

    clicarEmLogin() {
        cy.get(el.botaoLogin).click()
    }

    validarComContains(erro) {
        cy.contains(erro).should('be.visible')
    }

    validarPaginaLogin() {
        cy.get(el.textoPaginaLogin).should('have.text', 'Login to your account')
    }

    preencherName(name) {
        cy.get(el.campoName).type(name)
    }

    preencherEmail(email) {
        cy.get(el.campoEmail).type(email)
    }

    clicarEmSignUp() {
        cy.get(el.botaoSignUp).click()
    }

    validarMensagemUsuarioJaCadastrado() {
        cy.get(el.mensagemUsuarioJaCadastrado)
           .should('contain.text', 'Email Address already exist!')
    }

}
export default new Login()