const metric = require('../../src/distance/metric.distance')

test('centimeterToMillimeter test', () => {
  expect(metric.centimeterToMillimeter(3)).toBe(30)
})

test('millimeterToCentimeter', () => {
  expect(metric.millimeterToCentimeter(40)).toBe(4)
})

test('millimeterToCentimeter 2', () => {
  expect(metric.millimeterToCentimeter(4)).toBe(0.4)
})

test('centimeterToMeters', () => {
  expect(metric.centimeterToMeters(74)).toBe(0.74);
});