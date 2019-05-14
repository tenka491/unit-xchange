const metricToImperial = require('../../src/distance/metricToImperial');

test('should xchange cm to inches', () => {
  const answer = 3.937007874015748;
  expect(metricToImperial.centimeterToInch(10)).toBe(answer);
});

test('should xchange meter to feet', () => {
  const answer = 32.8084;
  expect(metricToImperial.meterToFeet(10)).toBe(answer)
});
