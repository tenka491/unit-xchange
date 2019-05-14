const imperial = require('../../src/distance/imperial.distance');

test('inchesToFeet test', () => {
  expect(imperial.inchesToFeet(36)).toBe(3)
})
test('inchesToFeet test', () => {
  expect(imperial.inchesToFeet(30)).toBe(2.5)
})

test('feetToInches', () => {
  expect(imperial.feetToInches(4)).toBe(48)
})

test('feetToInches 2', () => {
  expect(imperial.feetToInches(2.5)).toBe(30)
})