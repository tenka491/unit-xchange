import metric from '../../src/distance/metric';

test('should convert millimeter to centimeter test 1', () => {
  expect(metric.millimeterToCentimeter(40)).toBe(4);
});

test('should convert millimeter to centimeter test 2', () => {
  expect(metric.millimeterToCentimeter(4)).toBe(0.4);
});

test('should convert millimeter to meter', () => {
  expect(metric.millimeterToMeter(400)).toBe(0.4);
});

test('should convert millimeter to kilometer', () => {
  expect(metric.millimeterToKilometer(40000)).toBe(0.04);
});

test('should convert centimeter to millimeter', () => {
  expect(metric.centimeterToMillimeter(3)).toBe(30);
});

test('should convert centimeter to meters', () => {
  expect(metric.centimeterToMeter(74)).toBe(0.74);
});

test('should convert centimeter to kilometer', () => {
  expect(metric.centimeterToKilometer(7400)).toBe(0.74);
});

test('should convert meter to millimeter', () => {
  expect(metric.meterToMillimeter(4)).toBe(4000);
});

test('should convert meter to centimeter', () => {
  expect(metric.meterToCentimeter(4)).toBe(400);
});

test('should convert meter to kilometer', () => {
  expect(metric.meterToKilometer(1000)).toBe(1);
});
// Kilometer to ...
test('should convert kilometer to meter', () => {
  expect(metric.kilometerToMeter(1.20)).toBe(1200);
});

test('should convert kilometer to centimeter', () => {
  expect(metric.kilometerToCentimeter(1.2)).toBe(120000);
});

test('should convert kilometer to millimeter', () => {
  expect(metric.kilometerToMillimeter(1.2)).toBe(1200000);
});