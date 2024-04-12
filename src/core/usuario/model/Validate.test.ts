import jest from "jest";
import { Validate } from "./Usuario";

describe('Teste da classe Validate', () => {
    describe('Método isValidMail', () => {
        it('deve retornar true para um email válido', () => {
            const email = 'usuario@example.com';
            expect(Validate.isValidMail(email)).toBe(true);
        });

        it('deve retornar false para um email inválido', () => {
            const email = 'usuario@example';
            expect(Validate.isValidMail(email)).toBe(false);
        });
    });

    describe('Método isValidHost', () => {
        it('deve retornar true para um host permitido', () => {
            const email = 'usuario@gmail.com';
            expect(Validate.isValidHost(email)).toBe(true);
        });

        it('deve retornar false para um host não permitido', () => {
            const email = 'usuario@example.com';
            expect(Validate.isValidHost(email)).toBe(false);
        });
    });

    describe('Método detectarCaracteresEspeciais', () => {
        it('deve retornar true quando há caracteres especiais', () => {
            const nome = 'João@';
            expect(Validate.detectarCaracteresEspeciais(nome)).toBe(true);
        });

        it('deve retornar false quando não há caracteres especiais', () => {
            const nome = 'João';
            expect(Validate.detectarCaracteresEspeciais(nome)).toBe(false);
        });
    });

    describe('Método detectarNumeros', () => {
        it('deve retornar true quando há números', () => {
            const texto = 'João123';
            expect(Validate.detectarNumeros(texto)).toBe(true);
        });

        it('deve retornar false quando não há números', () => {
            const texto = 'João';
            expect(Validate.detectarNumeros(texto)).toBe(false);
        });
    });

    describe('Função stringMax', () => {
        it('deve retornar true quando o comprimento da string é maior ou igual ao máximo permitido', () => {
            const value = 'Lorem ipsum dolor sit amet';
            const comprimento = 10;
            expect(Validate.stringMax(value, comprimento)).toBe(true);
        });

        it('deve retornar false quando o comprimento da string é menor que o máximo permitido', () => {
            const value = 'Lorem';
            const comprimento = 10;
            expect(Validate.stringMax(value, comprimento)).toBe(false);
        });
    });

    describe('Função stringMin', () => {
        it('deve retornar true quando o comprimento da string é menor ou igual ao mínimo permitido', () => {
            const value = 'Lorem';
            const comprimento = 10;
            expect(Validate.stringMin(value, comprimento)).toBe(true);
        });

        it('deve retornar false quando o comprimento da string é maior que o mínimo permitido', () => {
            const value = 'Lorem ipsum dolor sit amet';
            const comprimento = 10;
            expect(Validate.stringMin(value, comprimento)).toBe(false);
        });
    });
});
