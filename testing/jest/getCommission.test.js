// testing suite for getCommission module
const getCommission = require('../../modules/getCommission');

test('person_type: "natural"; operation: "cash_in"; amount: "200"; currency: "EUR" should return 6', () => {
  expect(getCommission(200, 'cash_in', 'natural')).toBe(6);
});

test('person_type: "juridical"; operation: "cash_in"; amount: "10 000"; currency: "EUR" should return 300', () => {
  expect(getCommission(10000, 'cash_in', 'juridical')).toBe(300);
});

test('person_type: "natural"; operation: "cash_in"; amount: "7000"; currency "EUR" should return 210', () => {
  expect(getCommission(7000, 'cash_in', 'natural')).toBe(210);
});

test('person_type: "natural"; operation: "cash_out"; amount: "400"; currency "EUR" (without the free limit) should return 120', () => {
  expect(getCommission(400, 'cash_out', 'natural')).toBe(120);
});

test('person_type: "natural"; opreation: "cash_out"; amount: "2000"; currency: "EUR" (without the free limit) should return 600', () => {
  expect(getCommission(2000, 'cash_out', 'natural')).toBe(600);
});

test('person_type: "juridical"; operation: "cash_out"; amount "10 000"; currency: "EUR" should return 3000', () => {
  expect(getCommission(10000, 'cash_out', 'juridical')).toBe(3000);
});

test('person type: "juridical"; operation: "cash_in"; amount: "100 000"; currency: "EUR" should return 500', () => {
  expect(getCommission(100000, 'cash_in', 'natural')).toBe(500);
});

test('person type: "natural"; operation: "cash_in"; amount: "120 400"; currency "EUR" should return 500', () => {
  expect(getCommission(120400, 'cash_in', 'natural')).toBe(500);
});

test('person type: "natural" operation: "cash_out"; amount: "370"; currency: "EUR" should return 111', () => {
  expect(getCommission(370, 'cash_out', 'natural')).toBe(111);
});

test('person_type: "natural" operation "cash_out"; amount: "12300"; currency: "EUR" should return 3690', () => {
  expect(getCommission(12300, 'cash_out', 'natural')).toBe(3690);
});

test('person type: "juridical" operations: "cash_out"; amount: "100"; currency: "EUR" should return 50', () => {
  expect(getCommission(100, 'cash_out', 'juridical')).toBe(50);
});

test('person type: "natural" operation: "cash_out"; amount "100" currency: "EUR" should return 30', () => {
  expect(getCommission(100, 'cash_out', 'natural')).toBe(30);
});

test('person type: "juridical" operation: "cash_out"; amount: "1234" currency: "EUR" should return 371', () => {
  expect(getCommission(1234, 'cash_out', 'juridical')).toBe(371);
});

test('person type: "natural" operation: "cash_in"; amount: "8 000" currency: "EUR" should return 240', () => {
  expect(getCommission(8000, 'cash_in', 'natural')).toBe(240);
});

test('person type: "juridical" operation: "cash_out"; amount: "154"; currency: "EUR" should return 50', () => {
  expect(getCommission(154, 'cash_out', 'juridical')).toBe(50);
});

test('person_type: "juridical" operation: "cash_in"; amount: "17000"; currency: "EUR" should return 500', () => {
  expect(getCommission(17000, 'cash_in', 'juridical')).toBe(500);
});
