import Validator from '../Validator';

const validat = new Validator()

console.log(validat.validateUsername('Vale111111ra'))

test('Validator false', () => {
    expect(validat.validateUsername('Vale11111ra')).toBeFalsy();
});

test('Validator true', () => {
    expect(validat.validateUsername('Vale11ra')).toBeTruthy();
});