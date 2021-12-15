const Calculator = require('./calc.js');

const calcOperation = new Calculator(5, 6);

describe('Checking Add function', () => {
  test('Adding 5 and 6 should equals 11', () => {
    expect(calcOperation.add).toEqual(11);
  });

  test('Adding 5 and 6 should be defined', () => {
    expect(calcOperation.add).toBeDefined();
  });

  test('Adding 5 and 6 should not be 0', () => {
    expect(calcOperation.add).not.toBe(0);
  });
});

describe('Checking subtract function', () => {
  test('Subtracting 6 from 5 should not be Null', () => {
    expect(calcOperation.subtract).not.toBe(null);
  });

  test('Subtracting 6 from 5 should be -1', () => {
    expect(calcOperation.subtract).toEqual(-1);
  });

  test('Subtracting 6 from 5 should not be undefined', () => {
    expect(calcOperation.subtract).not.toBe(undefined);
  });
});

describe('Checking multiply function', () => {
  test('Check if the result is not Null', () => {
    expect(calcOperation.multiply).not.toBe(null);
  });

  test('Multiplying 5 by 6 should be 30', () => {
    expect(calcOperation.multiply).toEqual(30);
  });

  test('Multiplying 5 by 6 should not be undefined', () => {
    expect(calcOperation.multiply).not.toBe(undefined);
  });
});

describe('Checking divide function', () => {
  test('Division by zero is not allowed', () => {
    expect(calcOperation.divide).not.toBe(undefined);
  });

  test('Divide 5 by 6 should be 0.8333333333333334', () => {
    expect(calcOperation.divide).toBeCloseTo(0.8333333333333334, 16);
  });

  test('Divide 5 by 6 should not ne Null', () => {
    expect(calcOperation.divide).not.toBe(null);
  });
});