const capitalize = require('./caps.js');

test('Checking if the first letter is capitalized', () => {
  expect(capitalize('first')).toEqual('First');
});