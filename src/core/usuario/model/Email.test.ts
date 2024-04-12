import jest from "jest";
import { Email } from "./Usuario";

describe('Teste da classe Email', () => {
    describe('Método create', () => {
        it('deve criar um objeto Email quando o email é válido', () => {
            const emailString = 'usuario@gmail.com';
            const email = Email.create(emailString);
            expect(email instanceof Email).toBe(true);
            expect(email.value).toBe(emailString);
        });

        it('deve lançar uma exceção ao tentar criar um objeto Email com email inválido', () => {
            const emailString = 'usuario@example';
            expect(() => Email.create(emailString)).toThrowError(/Email fora do padrão/);
        });
    });

    describe('Propriedade value', () => {
        it('deve retornar o valor do email corretamente', () => {
            const emailString = 'usuario@gmail.com';
            const email = Email.create(emailString);
            expect(email.value).toBe(emailString);
        });
    });
});