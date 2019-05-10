const metric = require('../../src/distance/metric.distance')

test('cmToMm test', () => {
  expect(metric.cmToMm(3)).toBe(30)
})

test('mmToCm', () => {
  expect(metric.mmToCm(40)).toBe(4)
})

test('mmToCm 2', () => {
  expect(metric.mmToCm(4)).toBe(0.4)
})