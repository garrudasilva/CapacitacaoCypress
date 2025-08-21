/// <reference types='cypress' />
import Login from '../support/Pages/Login/index.js'
import Produtos from '../support/Pages/Produtos/index.js'
import Cadastro from '../support/Pages/Cadastro/index.js'
import Checkout from '../support/Pages/Checkout/index.js'
import dadoscartao from '../support/Factories/dadoscartao.js'
import { faker } from '@faker-js/faker';

describe('Fluxos', function () {

     before(function () {

          // cy.fixture('credenciaisFixture').then((dados) => {
          //      this.credenciaisExt = dados
          // })
     })

     beforeEach(function () {
          Login.acessarURL()
          cy.url().should('include', 'login')
     })

     it("Realizar Login sem informar a senha", function () {
          Login.preencherUsername('garruda@minsait.com')
          Login.clicarEmLogin()
          Login.validarPaginaLogin()
     })

     it("Realizar Login sem informar o usuario", function () {
          Login.preencherPassword('12345')
          Login.clicarEmLogin()
          Login.validarPaginaLogin()

     })

     it("Realizar Cadastro", function () {
          // Cadastrando usuario
          Login.preencherName('Gleiciane')
          Login.preencherEmail('garruda@minsait.com')
          Login.clicarEmSignUp()

          Cadastro.validarPaginaCadastro()
          Cadastro.preencherGenero('Mrs')
          Cadastro.validarName('Gleiciane')
          Cadastro.validarEmail('garruda@minsait.com')
          Cadastro.preencherPassword('12345')
          Cadastro.preencherNascimento('09/07/1986')
          Cadastro.marcarFlagNewsletter()
          Cadastro.marcarFlagReceberOfertas()
          Cadastro.preencherFirstName('Gleiciane')
          Cadastro.preencherLastName('Silva')
          Cadastro.preencherCompany('Minsait')
          Cadastro.preencherAdress('Rua Teste, 123')
          Cadastro.preencherAdress2('Apt 456')
          Cadastro.preencherCountry('Canada')
          Cadastro.preencherState('Goiás')
          Cadastro.preencherCity('Jataí')
          Cadastro.preencherZipCode('74000-000')
          Cadastro.preencherPhone('83988744525')
          Cadastro.clicarEmCreateAccount()

          //validando que conta foi criada
          Cadastro.validarTextoNaPagina('Account Created!')
          Cadastro.clicarEmContinuar()

          //validando que usuario está acessando area logada
          Cadastro.validarUsuarioCadastrado('Gleiciane')

          //deletando usuario
          Cadastro.deletarUsuario()
          Cadastro.clicarEmContinuar()
     })

     it("Realizar Cadastro de usuario/email já existente", function () {
          // Cadastrando usuario
          Login.preencherName('Gleiciane')
          Login.preencherEmail('garruda@minsait.com')
          Login.clicarEmSignUp()

          Cadastro.validarPaginaCadastro()
          Cadastro.preencherGenero('Mrs')
          Cadastro.validarName('Gleiciane')
          Cadastro.validarEmail('garruda@minsait.com')
          Cadastro.preencherPassword('12345')
          Cadastro.preencherNascimento('09/07/1986')
          Cadastro.marcarFlagNewsletter()
          Cadastro.marcarFlagReceberOfertas()
          Cadastro.preencherFirstName('Gleiciane')
          Cadastro.preencherLastName('Silva')
          Cadastro.preencherCompany('Minsait')
          Cadastro.preencherAdress('Rua Teste, 123')
          Cadastro.preencherAdress2('Apt 456')
          Cadastro.preencherCountry('Canada')
          Cadastro.preencherState('Goiás')
          Cadastro.preencherCity('Jataí')
          Cadastro.preencherZipCode('74000-000')
          Cadastro.preencherPhone('83988744525')
          Cadastro.clicarEmCreateAccount()
          Cadastro.validarTextoNaPagina('Account Created!')
          Cadastro.clicarEmContinuar()
          Cadastro.validarUsuarioCadastrado('Gleiciane')
          Cadastro.fazerLogout()

          //Tentando realizar cadastro do mesmo usuario
          Login.preencherName('Gleiciane')
          Login.preencherEmail('garruda@minsait.com')
          Login.clicarEmSignUp()

          //Verificando validação de Mensagem 'Usuário já cadastrado!'
          Login.validarMensagemUsuarioJaCadastrado()

          //Deletando usuario
          Login.preencherUsername('garruda@minsait.com')
          Login.preencherPassword('12345')
          Login.clicarEmLogin()
          Cadastro.deletarUsuario()

     })

     it("Realizar Login com sucesso", function () {
          // Cadastrando usuario
          Login.preencherName('Gleiciane')
          Login.preencherEmail('garruda@minsait.com')
          Login.clicarEmSignUp()

          Cadastro.validarPaginaCadastro()
          Cadastro.preencherGenero('Mrs')
          Cadastro.validarName('Gleiciane')
          Cadastro.validarEmail('garruda@minsait.com')
          Cadastro.preencherPassword('12345')
          Cadastro.preencherNascimento('09/07/1986')
          Cadastro.marcarFlagNewsletter()
          Cadastro.marcarFlagReceberOfertas()
          Cadastro.preencherFirstName('Gleiciane')
          Cadastro.preencherLastName('Silva')
          Cadastro.preencherCompany('Minsait')
          Cadastro.preencherAdress('Rua Teste, 123')
          Cadastro.preencherAdress2('Apt 456')
          Cadastro.preencherCountry('Canada')
          Cadastro.preencherState('Goiás')
          Cadastro.preencherCity('Jataí')
          Cadastro.preencherZipCode('74000-000')
          Cadastro.preencherPhone('83988744525')
          Cadastro.clicarEmCreateAccount()
          Cadastro.validarTextoNaPagina('Account Created!')
          Cadastro.clicarEmContinuar()
          Cadastro.validarUsuarioCadastrado('Gleiciane')
          Cadastro.fazerLogout()

          // Realizando Login
          Login.preencherUsername('garruda@minsait.com')
          Login.preencherPassword('12345')
          Login.clicarEmLogin()

          //validando que usuario está acessando area logada
          Cadastro.validarUsuarioCadastrado('Gleiciane')

          //deletando usuario
          Cadastro.deletarUsuario()
          Cadastro.clicarEmContinuar()
     })

     it("Realizar compra com sucesso", function () {

          //continuar mesmo se apresentar erro de javascript
          Cypress.on('uncaught:exception', (err, runnable) => {
               // Retorna false para impedir que o teste falhe
               return false;
          });

          const emailFake = faker.internet.email();

          // Cadastrando usuario
          Login.preencherName('Gleiciane')
          Login.preencherEmail(emailFake)
          Login.clicarEmSignUp()

          Cadastro.validarPaginaCadastro()
          Cadastro.preencherGenero('Mrs')
          Cadastro.validarName('Gleiciane')
          Cadastro.validarEmail(emailFake)
          Cadastro.preencherPassword('12345')
          Cadastro.preencherNascimento('09/07/1986')
          Cadastro.marcarFlagNewsletter()
          Cadastro.marcarFlagReceberOfertas()
          Cadastro.preencherFirstName('Gleiciane')
          Cadastro.preencherLastName('Silva')
          Cadastro.preencherCompany('Minsait')
          Cadastro.preencherAdress('Rua Teste, 123')
          Cadastro.preencherAdress2('Apt 456')
          Cadastro.preencherCountry('Canada')
          Cadastro.preencherState('Goiás')
          Cadastro.preencherCity('Jataí')
          Cadastro.preencherZipCode('74000-000')
          Cadastro.preencherPhone('83988744525')
          Cadastro.clicarEmCreateAccount()
          Cadastro.validarTextoNaPagina('Account Created!')
          Cadastro.clicarEmContinuar()
          Cadastro.validarUsuarioCadastrado('Gleiciane')
          Cadastro.fazerLogout()

          // Realizando Login
          Login.preencherUsername(emailFake)
          Login.preencherPassword('12345')
          Login.clicarEmLogin()

          //validando que usuario está acessando area logada
          Cadastro.validarUsuarioCadastrado('Gleiciane')

          //Clicar botão Produtos


          cy.get('a[href="/products"]')
               .should('contain.text', 'Products')
               .click();




          Produtos.validarUrlProdutos()
          Produtos.validarLabelProdutos()
          Produtos.acessarCategoriaMulheres()
          Produtos.acessarVestidos()

          Produtos.adicionarVestidoMeioCarrinho()

          Produtos.clicarContinuarComprando()

          Produtos.clicarNoCarrinho()

          cy.get('li.active')
               .should('be.visible')
               .and('contain.text', 'Shopping Cart');

          Produtos.clicarNoBotaoCheckout()
          Checkout.validarEnderecoEntrega({
               nome: 'Mrs. Gleiciane Silva',
               empresa: 'Minsait',
               endereco1: 'Rua Teste, 123',
               apt: 'Apt 456',
               cidade: 'Jataí',
               estado: 'Goiás',
               cep: '74000-000',
               pais: 'Canada',
               telefone: '83988744525'
          });
          Checkout.clicarPlaceOrder();

          //Realizar Pagamento do Cartão
          // Gerar dados fake
          const cartao = dadoscartao.gerarDados();

          // Preencher o checkout
          Checkout.preencherNomeCartao(cartao.nomeCartao);
          Checkout.preencherNumeroCartao(cartao.numeroCartao);
          Checkout.preencherCVC(cartao.cvc);
          Checkout.preencherMesValidade(cartao.mesValidade);
          Checkout.preencherAnoValidade(cartao.anoValidade);

          // Clicar em Place Order
          Checkout.clicarPayAndConfirm();

          Checkout.validarPedidoConfirmado();
          Checkout.clicarEmContinuar();

     })
})