import imperialToMetric from '../../src/distance/imperialToMetric';

test('should convert feet to meters', () => {
  const answer = 3.047999902464003;
  expect(imperialToMetric.feetToMeters(10)).toBe(answer);
});

test('should convert feet to centimeters', () => {
  const answer = 304.7999902464003;
  expect(imperialToMetric.feetToCentimeters(10)).toBe(answer);
});

test('should convert inches to meters', () => {
  const answer = 3.047999902464003;
  expect(imperialToMetric.inchesToMeters(120)).toBe(answer);
});

test('should convert inches to centimeters', () => {
  const answer = 53.34;
  expect(imperialToMetric.inchesToCentimeters(21)).toBe(answer);
});

test('should convert inches to centimeters', () => {
  const answer = 5334;
  expect(imperialToMetric.inchesToMillimeters(21)).toBe(answer);
});