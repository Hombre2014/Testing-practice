const reverseString = require('./string2.js');

test('Check the string is reversed', () => {
  expect(reverseString('first')).toEqual('tsrif');
});

test('Check if the bigger string is reversed', () => {
  expect(reverseString('first and second')).toEqual('dnoces dna tsrif');
});