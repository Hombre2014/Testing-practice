const stringLength = require('./string1.js');

test('String length is correct', () => {
  expect(stringLength('1234567890')).toBe(10);
});

test('If string contains at least one character', () => {
  expect(stringLength('1234567890') >= 1).toBeTruthy;
});

test('If string is no longer then 10 characters', () => {
  expect(stringLength('1234567890') <= 10).toBeTruthy;
});
