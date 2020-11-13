const { checkId, generateId } = require('turkish-id-checker')

test('generated Id is valid', () => {
  for (let i = 0; i < 100000; i++) {
    const generatedId = generateId()
    expect(checkId(generatedId).status).toBe(true)
  }
})
