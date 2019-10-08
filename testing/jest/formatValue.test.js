// test the formatValue function
const formatValue = require('../../modules/formatValue');

test('commission of 50 should be formatted to 0.50', () => {
  expect(formatValue(50)).toBe('0.50');
});

test('commission of 34 should be formatted to 0.34', () => {
  expect(formatValue(34)).toBe('0.34');
});

test('commission of 123 should be formatted to 1.23', () => {
  expect(formatValue(123)).toBe('1.23');
});

test('commission of 200 should be formatted to 2.00', () => {
  expect(formatValue(200)).toBe('2.00');
});

test('commission of 2000 should be formatted to 20.00', () => {
  expect(formatValue(2000)).toBe('20.00');
});

test('commission of 14 should be formatted to 0.14', () => {
  expect(formatValue(14)).toBe('0.14');
});

test('commission of 0.5 should be formatted to 0.01', () => {
  expect(formatValue(0.5)).toBe('0.01');
});

test('commission of 840 should be formatted to 8.40', () => {
  expect(formatValue(840)).toBe('8.40');
});

test('commission of 8700 should be formatted to 87.00', () => {
  expect(formatValue(8700)).toBe('87.00');
});

test('commission of 7 should be formatted to 0.07', () => {
  expect(formatValue(7)).toBe('0.07');
});

test('commission of 0 should be formatted to 0.00', () => {
  expect(formatValue(0)).toBe('0.00');
});
