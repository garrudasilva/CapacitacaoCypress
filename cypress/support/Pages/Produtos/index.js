const el = require('./elements').ELEMENTS
class Produtos {

    validarLabelProdutos() {
        cy.get(el.labelProdutos).should('have.text', 'All Products')
    }

    validarUrlProdutos() {
        cy.url().should('eq', el.url)
    }
    acessarCategoriaMulheres() {
        cy.get(el.categoriaWoman)
            .should('contain.text', 'Women')
            .click();
    }
    acessarVestidos() {
        cy.get(el.dress)
            .should('contain.text', 'Dress')
            .click();
    }

    adicionarVestidoMeioCarrinho() {
        cy.get(el.vestidoMeio).first().click();
    }

    clicarContinuarComprando() {
        cy.get(el.botaoContinuarComprando)
            .should('be.visible')
            .and('contain.text', 'Continue Shopping')
            .click();
    }

    clicarNoCarrinho() {
        cy.get(el.botaoCarrinho).first()
            .should('be.visible')
            .and('contain.text', 'Cart')
            .click();
    }

    clicarNoBotaoCheckout() {
        cy.get(el.botaoCheckout)
            .should('be.visible')
            .and('contain.text', 'Proceed To Checkout')
            .click();
    }

}
export default new Produtos()