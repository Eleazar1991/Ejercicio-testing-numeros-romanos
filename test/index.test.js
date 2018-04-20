import { romanNumbers } from "../src";

describe('roman numbers should', () => {
    test('return I if number is one', () => {
        expect(romanNumbers(1)).toBe('I');
    })

    test('return XVIII if number is 18', () => {
        expect(romanNumbers(18)).toBe('XVIII');
    })
    
    test('return XIX if number is 19', () => {
        expect(romanNumbers(19)).toBe('XIX');
    })
})