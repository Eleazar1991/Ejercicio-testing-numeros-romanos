//test fizzbuzz
// const fizzbuzz = require('../src/fizzbuzz');
import { fizzbuzz } from "../src";
/* 
describe('Index', () => {
    test('Debe sumar dos numeros', () => {
        expect(2 + 3).toBe(5);
    })
}) */
describe('Index', () => {
    test('Debería devolver un number como un string', () => {
        expect(fizzbuzz(1)).toBe('1');
    })
    test('Deberia return FIZZ si number es divisible por 3', () => {
        expect(fizzbuzz(6)).toBe('FIZZ');
    })
    test('Debería retrun FIZZ si number es divisible por 3', () => {
        expect(fizzbuzz(6)).toBe('FIZZ');
        expect(fizzbuzz(18)).toBe('FIZZ');
        expect(fizzbuzz(21)).toBe('FIZZ');
    })
    test('Debería retrun BUZZ si number es divisible por 5', () => {
        expect(fizzbuzz(5)).toBe('BUZZ');
        expect(fizzbuzz(10)).toBe('BUZZ');
        expect(fizzbuzz(25)).toBe('BUZZ');
    })
    test('Debería retrun FIZZBUZZ si number es divisible por 5 y por 3', () => {
        expect(fizzbuzz(15)).toBe('FIZZBUZZ');
    })

})