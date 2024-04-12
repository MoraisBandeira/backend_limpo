import jest from "jest";
import { Nome } from "./Usuario";

describe('Teste da classe Nome', () => {
    describe('Método create', () => {
        it('deve criar um objeto Nome quando o nome é válido', () => {
            const nomeString = 'João';
            const nome = Nome.create(nomeString);
            expect(nome instanceof Nome).toBe(true);
            expect(nome.value).toBe(nomeString);
        });

        it('deve lançar uma exceção ao tentar criar um objeto Nome com nome inválido', () => {
            const nomeString = '12345';
            expect(() => Nome.create(nomeString)).toThrowError('Nome Invalido');
        });
    });

    describe('Propriedade value', () => {
        it('deve retornar o valor do nome corretamente', () => {
            const nomeString = 'Maria';
            const nome = Nome.create(nomeString);
            expect(nome.value).toBe(nomeString);
        });
    });
});