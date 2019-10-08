// test suite for the operate function which uses each module seperately

const operate = require('../../modules/operation');
const input1 = require('../../testing/manual/input/input1.json');
const input2 = require('../../testing/manual/input/input2.json');
const input3 = require('../../testing/manual/input/input3.json');
const input4 = require('../../testing/manual/input/input4.json');

test('input1 should return array with all expected values in type: string' , () => {
    let resultRightValues = ["0.06", "0.90", "87.00", "3.00", "0.30", "0.30", "5.00", "0.00", "0.00"];
    let result = operate(input1);

    for (let i = 0; i < result.length; i++) {
        expect(result[i]).toBe(resultRightValues[i]);
    }
});

test('input2 should return array with all expected values in type: string', () => {
    let resultRightValues = ["0.36", "0.09", "3.00", "0.00", "0.00", "3.00", "0.00", "30.00", "0.21"];
    let result = operate(input2);

    for (let i = 0; i < result.length; i++) {
        expect(result[i]).toBe(resultRightValues[i]);
    }
});

test('input3 should return array with all expected values in type: string', () => {
    let resultRightValues = [
        "2.10",
        "3.00",
        "2.25",
        "0.05",
        "0.00",
        "15.00",
        "0.00",
        "0.30",
        "0.00",
        "2.70",
        "0.99",
        "0.00",
        "3.60",
        "7.20",
        "0.30",
        "0.00",
        "0.60",
        "0.50",
        "5.00",
        "5.00"];
    let result = operate(input3);

    for (let i = 0; i < result.length; i++) {
        expect(result[i]).toBe(resultRightValues[i]);
    }
});

test('input4 should return array with all expected values in type: string', () => {
  let resultRightValues = [
      "0.15",
      "0.36",
      "0.27",
      "1.50",
      "2.34",
      "3.01",
      "5.00",
      "5.00",
      "0.00",
      "1.50",
      "0.00",
      "450.00",
      "0.50",
      "1.50",
      "4.50",
      "0.00",
      "1.50",
      "0.33",
      "0.00",
      "15.00",
      "1.20"
  ];
  let result = operate(input4);

  for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(resultRightValues[i]);
  }
});
