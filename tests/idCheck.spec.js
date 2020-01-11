const checkId = require('turkish-id-checker');
const ExampleIdNumbers = require('./exampleData');

test('10 different valid Turkish ID strings', () => {
  ExampleIdNumbers.strings.forEach(id => {
    expect(checkId(id).status).toBe(true);
  });
});
test('10 different valid Turkish ID numbers', () => {
  ExampleIdNumbers.numbers.forEach(id => {
    expect(checkId(id).status).toBe(true);
  });
});

test('Some unaccepted types', () => {
  ExampleIdNumbers.unacceptedTypes.forEach(id => {
    expect(checkId(id).display).toBe('Unaccepted Type');
    expect(checkId(id).status).toBe(false);
  });
});

test("An invalid Turkish ID number which can't pass cases", () => {
  expect(checkId('15173512681').status).toBe(false);
});

test("A string shouldn't pass the tests", () => {
  expect(checkId('Lorem Ipsum').status).toBe(false);
});

test("A number less than 11 characters shouldn't pass the tests", () => {
  expect(checkId(Math.floor(Math.random() * 1000).toString()).status).toBe(
    false
  );
});

test("A number greater than 11 characters shouldn't pass the tests", () => {
  expect(
    checkId(Math.floor(Math.random() * 10000000000000000).toString()).status
  ).toBe(false);
});

test("Ataturk's ID should display a special message", () => {
  expect(checkId('10000000146').display).toBe(
    "This is M.K. Atatürk's ID Number!"
  );
});

test("A number starting with 0 shouldn't pass the test", () => {
  let value = '0' + Math.floor(Math.random() * 10000000000).toString();
  expect(checkId(value).status).toBe(false);
  expect(checkId(value).display).toBe("First letter can't be 0");
});
