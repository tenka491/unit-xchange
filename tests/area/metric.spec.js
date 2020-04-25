import metric from '../../src/area/metric';

test('metric.squareMillimeter', () => {
  expect(metric.squareMillimeter(4, 4)).toBe(16)
})

test('metric.squareMillimeter', () => {
  expect(metric.squareMillimeter(5)).toBe(25)
})

test('metric.squareMillimeterToCentimeter w x h', () => {
  expect(metric.squareMillimeterToCentimeter(40, 40)).toBe(16)
})

test('metric.squareMillimeterToCentimeter', () => {
  expect(metric.squareMillimeterToCentimeter(40)).toBe(16)
})

test('metric.squareMillimeterToMeter', () => {
  expect(metric.squareMillimeterToMeter(4000, 4000)).toBe(16)
})

test('metric.squareCentimeterToMillimeter', () => {
  expect(metric.squareCentimeterToMillimeter(4, 4)).toBe(1600)
})
