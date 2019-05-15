const metricToImperial = require('../../src/distance/metricToImperial');

test('centimeterToInch', () => {
  const answer = 3.937007874015748;
  expect(metricToImperial.centimeterToInch(10)).toBe(answer);
});

test('centimeterToFeet', () => {
  const answer = 0.32808398950131235;
  expect(metricToImperial.centimeterToFeet(10)).toBe(answer);
});

test('centimeterToYards', () => {
  const answer = 2.1872265966754156;
  expect(metricToImperial.centimeterToYards(200)).toBe(answer);
});

test('meterToFeet', () => {
  const answer = 32.8084;
  expect(metricToImperial.meterToFeet(10)).toBe(answer)
});
