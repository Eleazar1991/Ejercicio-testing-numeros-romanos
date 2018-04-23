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

    test('return MMM if number is 3000', () => {
        expect(romanNumbers(3000)).toBe('MMM');
    })
    test('return VI if number is 6', () => {
        expect(romanNumbers(6)).toBe('VI');
    })
    test('return CXC if number is 190', () => {
        expect(romanNumbers(190)).toBe('CXC');
    })
    test('return MCCCLX  if number is 1360', () => {
        expect(romanNumbers(1360)).toBe('MCCCLX');
    })
    test('return MCD  if number is 1400', () => {
        expect(romanNumbers(1400)).toBe('MCD');
    })
    test('return MCMXLV  if number is 1945', () => {
        expect(romanNumbers(1945)).toBe('MCMXLV');
    })

})