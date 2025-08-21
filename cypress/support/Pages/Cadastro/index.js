const el = require('./elements').ELEMENTS
class Cadastro {

    validarPaginaCadastro() {
        cy.contains('Enter Account Information').should('be.visible')
    }

    preencherGenero(genero) {
        if (genero === 'Mr') {
            cy.get(el.checkboxMr).check(genero)
        } else {
            cy.get(el.checkboxMrs).check(genero)
        }
    }

    validarName(name) {
        cy.get(el.name).should('have.value', name)
    }

    validarEmail(email) {
        cy.get(el.email).should('have.value', email)
    }

    preencherPassword(password) {
        cy.get(el.password).type(password)
    }

    preencherNascimento(dataNascimento) {

        // Extrai o dia
        let dia = dataNascimento.slice(0, 2);
        dia = dia.startsWith('0') ? dia.substring(1) : dia; // remove o zero à esquerda, se houver

        // Extrai o mes
        let mes = dataNascimento.slice(3, 5);
        mes = mes.startsWith('0') ? mes.substring(1) : dia; // remove o zero à esquerda, se houver

        // Extrai o ano
        let ano = dataNascimento.slice(6, 10);

        // Seleciona o valor no select pelo atributo data-qa
        cy.get(el.dia).select(dia);
        cy.get(el.mes).select(mes);
        cy.get(el.ano).select(ano);
    }

    marcarFlagNewsletter() {
        cy.get(el.receberNewsletter).check()
    }

    marcarFlagReceberOfertas() {
        cy.get(el.receberOfertas).check()
    }

    preencherFirstName(firstName) {
        cy.get(el.firstName).type(firstName)
    }

    preencherLastName(lastName) {
        cy.get(el.lastName).type(lastName)
    }

    preencherCompany(company) {
        cy.get(el.company).type(company)
    }

    preencherAdress(address) {
        cy.get(el.address).type(address)
    }

    preencherAdress2(address2) {
        cy.get(el.address2).type(address2)
    }

    preencherCountry(country) {
        cy.get(el.country).select(country)
    }

    preencherState(state) {
        cy.get(el.state).type(state)
    }

    preencherCity(city) {
        cy.get(el.city).type(city)
    }

    preencherZipCode(zipCode) {
        cy.get(el.zipCode).type(zipCode)
    }

    preencherPhone(phone) {
        cy.get(el.mobileNumber).type(phone)
    }

    clicarEmCreateAccount() {
        cy.get(el.botaoCreateAccount).click()
    }

    validarTextoNaPagina(texto) {
        cy.contains(texto).should('be.visible')
    }

    clicarEmContinuar() {
        cy.get(el.botaoContinue).click()
    }

    validarUsuarioCadastrado(nome) {
        cy.get('a').should('contain.text', `Logged in as ${nome}`);
    }

    deletarUsuario() {
        cy.get(el.botaoDeleteAccount)
            .should('be.visible')
            .and('contain.text', 'Delete Account')
            .click();
    }

    fazerLogout() {
        cy.get(el.logout)
            .should('be.visible')
            .and('contain.text', 'Logout')
            .click();
    }












}
export default new Cadastro()