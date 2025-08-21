const el = require('./elements').ELEMENTS
class Produtos {

    validarEnderecoEntrega(endereco) {
        const { nome, empresa, endereco1, apt, cidade, estado, cep, pais, telefone } = endereco;

        cy.get(el.tituloEndereco).should('have.text', 'Your delivery address');
        cy.get(el.nomeEntrega).should('contain.text', nome);

        cy.get(el.linhasEndereco).eq(0).should('contain.text', empresa);
        cy.get(el.linhasEndereco).eq(1).should('contain.text', endereco1);
        cy.get(el.linhasEndereco).eq(2).should('contain.text', apt);

        cy.get(el.cidadeEstadoCep)
            .should('contain.text', cidade)
            .and('contain.text', estado)
            .and('contain.text', cep);

        cy.get(el.paisEntrega).should('contain.text', pais);
        cy.get(el.telefoneEntrega).should('contain.text', telefone);
    }

    clicarPlaceOrder() {
        cy.get(el.botaoPlaceOrder)
            .should('be.visible')
            .and('contain.text', 'Place Order')
            .click();
    }

    preencherNomeCartao(nome) {
        cy.get(el.campoNomeCartao)
            .should('be.visible')
            .and('be.enabled')
            .type(nome);
    }

    preencherNumeroCartao(numero) {
        cy.get(el.campoNumeroCartao)
            .should('be.visible')
            .and('be.enabled')
            .type(numero);
    }

    preencherCVC(cvc) {
        cy.get(el.campoCVC)
            .should('be.visible')
            .and('be.enabled')
            .type(cvc);
    }

    preencherMesValidade(mes) {
        cy.get(el.campoMesValidade)
            .should('be.visible')
            .and('be.enabled')
            .type(mes);
    }

    preencherAnoValidade(ano) {
        cy.get(el.campoAnoValidade)
            .should('be.visible')
            .and('be.enabled')
            .type(ano);
    }

    clicarPlaceOrder() {
        cy.get(el.botaoPlaceOrder)
            .should('be.visible')
            .click();
    }

    clicarPayAndConfirm() {
        cy.get(el.botaoPayAndConfirm)
            .should('be.visible')
            .and('contain.text', 'Pay and Confirm Order')
            .click();
    }

    validarPedidoConfirmado() {
        // Validar título
        cy.get(el.tituloPedidoConfirmado)
            .should('be.visible')
            .and('contain.text', 'Order Placed!');

        // Validar mensagem
        cy.get(el.mensagemPedidoConfirmado)
            .should('be.visible')
            .and('contain.text', 'Congratulations! Your order has been confirmed!');
    }

    clicarEmContinuar() {
        cy.get(el.botaoContinue)
            .should('be.visible')
            .and('contain.text', 'Continue')
            .click();
    }
}
export default new Produtos()