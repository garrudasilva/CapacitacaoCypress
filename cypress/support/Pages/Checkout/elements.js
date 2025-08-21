//Elementos da pagina de Checkout
export const ELEMENTS = {

    //endereço de entrega
    tituloEndereco: '#address_delivery li.address_title h3',
    nomeEntrega: '#address_delivery li.address_firstname.address_lastname',
    linhasEndereco: '#address_delivery li.address_address1.address_address2',
    cidadeEstadoCep: '#address_delivery li.address_city.address_state_name.address_postcode',
    paisEntrega: '#address_delivery li.address_country_name',
    telefoneEntrega: '#address_delivery li.address_phone',


    // Campos do cartão
    campoNomeCartao: 'input[data-qa="name-on-card"]',
    campoNumeroCartao: 'input[data-qa="card-number"]',
    campoCVC: 'input[data-qa="cvc"]',
    campoMesValidade: 'input[data-qa="expiry-month"]',
    campoAnoValidade: 'input[data-qa="expiry-year"]',

    // Botão Place Order
    botaoPlaceOrder: 'a.check_out',

    botaoPayAndConfirm: 'button[data-qa="pay-button"]',

    // Tela de confirmação de pedido
    tituloPedidoConfirmado: 'h2[data-qa="order-placed"]',
    mensagemPedidoConfirmado: 'div.col-sm-9 p',

    // Botão Continue
    botaoContinue: 'a[data-qa="continue-button"]',

}

