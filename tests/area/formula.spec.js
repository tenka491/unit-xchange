const formulas = require('../../src/area/formulas');

test('formulas.sqaureArea', () => {
  expect(formulas.squareArea(4, 4)).toBe(16)
})
