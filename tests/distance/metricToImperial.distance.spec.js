const metricToImperial = require('../../src/distance/metricToImperial.distance');

test('should xchange cm to inches', () => {
  const answer = 3.937007874015748;
  expect(metricToImperial.centimeterToInch(10)).toBe(answer);
});

test('should xchange meter to feet', () => {
  const answer = 32.8084;
  expect(metricToImperial.meterToFeet(10)).toBe(answer)
});

test('should xchange feet to meters', () => {
  const answer = 3.047999902464003;
  expect(metricToImperial.feetToMeters(10)).toBe(answer);
});