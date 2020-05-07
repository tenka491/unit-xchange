import metric from '../../src/area/metric';

test('should convert square millimeter test 1', () => {
  expect(metric.squareMillimeter(4, 4)).toBe(16);
});

test('should convert square millimeter test 2', () => {
  expect(metric.squareMillimeter(5)).toBe(25);
});

test('should convert square millimeter to centimeter test 1', () => {
  expect(metric.squareMillimeterToCentimeter(40, 40)).toBe(16);
});

test('should convert square millimeter to centimeter test 2', () => {
  expect(metric.squareMillimeterToCentimeter(40)).toBe(16);
});

test('should convert square millimeter to meter', () => {
  expect(metric.squareMillimeterToMeter(4000, 4000)).toBe(16);
});

test('should convert square centimeter to millimeter', () => {
  expect(metric.squareCentimeterToMillimeter(4, 4)).toBe(1600);
});
