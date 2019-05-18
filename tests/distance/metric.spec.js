const metric = require('../../src/distance/metric')

test('millimeterToCentimeter', () => {
  expect(metric.millimeterToCentimeter(40)).toBe(4)
});

test('millimeterToCentimeter 2', () => {
  expect(metric.millimeterToCentimeter(4)).toBe(0.4)
});

test('millimeterToMeter', () => {
  expect(metric.millimeterToMeter(400)).toBe(0.4)
});

test('millimeterToKilometer', () => {
  expect(metric.millimeterToKilometer(40000)).toBe(0.04)
});

test('centimeterToMillimeter test', () => {
  expect(metric.centimeterToMillimeter(3)).toBe(30)
});

test('centimeterToMeters', () => {
  expect(metric.centimeterToMeter(74)).toBe(0.74);
});

test('centimeterToKilometer', () => {
  expect(metric.centimeterToKilometer(7400)).toBe(0.74);
});

test('meterToMillimeter', () => {
  expect(metric.meterToMillimeter(4)).toBe(4000);
});

test('meterToCentimeter', () => {
  expect(metric.meterToCentimeter(4)).toBe(400);
});

test('meterToKilometer', () => {
  expect(metric.meterToKilometer(1000)).toBe(1);
});