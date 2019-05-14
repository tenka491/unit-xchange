const  units = require('../units');

function centimeterToInch(cm) {
  return cm/units.cmPerInch;
}

function meterToFeet(m) {
  return m * units.feetPerMeter;
}

function feetToMeters(ft) {
  return ft / units.feetPerMeter;
}

const metricToImperial = {
  centimeterToInch,
  meterToFeet,
  feetToMeters
}

module.exports = metricToImperial;