const units = require('../units');

function feetToMeters(ft) {
  return ft / units.feetPerMeter;
}

const imperialToMetric = {
  feetToMeters
}

module.exports = imperialToMetric;