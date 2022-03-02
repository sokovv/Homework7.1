import Validator from '../Validator';

const validat = new Validator()


test('Validator false', () => {
    expect(validat.validateUsername('Vale11111ra')).toBeFalsy();
});
test('Validator false', () => {
    expect(validat.validateUsername('-Valera')).toBeFalsy();
});
test('Validator false', () => {
    expect(validat.validateUsername('Valera-')).toBeFalsy();
});
test('Validator false', () => {
    expect(validat.validateUsername('_Valera')).toBeFalsy();
});

test('Validator true', () => {
    expect(validat.validateUsername('Valera')).toBeTruthy();
});
test('Validator true', () => {
    expect(validat.validateUsername('Vale11ra')).toBeTruthy();
});
test('Validator true', () => {
    expect(validat.validateUsername('valera')).toBeTruthy();
});
