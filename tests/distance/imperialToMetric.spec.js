const imperialToMetric = require('../../src/distance/imperialToMetric')

test('should xchange feet to meters', () => {
  const answer = 3.047999902464003;
  expect(imperialToMetric.feetToMeters(10)).toBe(answer);
});