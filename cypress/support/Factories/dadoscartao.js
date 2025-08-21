
import { faker } from '@faker-js/faker';

class DadosCartao {

    gerarDados() {
        return {
            nomeCartao: faker.person.fullName(), // mudou de name.fullName() para person.fullName()
            numeroCartao: faker.finance.creditCardNumber('################'),
            cvc: faker.finance.creditCardCVV(),
            mesValidade: faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0'),
            anoValidade: faker.number.int({ min: 2025, max: 2035 }).toString()
        };
    }
}

export default new DadosCartao();
