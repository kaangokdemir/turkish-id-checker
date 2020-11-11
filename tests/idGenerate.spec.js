const {checkId, generateId} = require('turkish-id-checker');

test('generated Id is valid', () => {
  const generatedId = generateId();
  expect(checkId(generatedId).status).toBe(true);
});