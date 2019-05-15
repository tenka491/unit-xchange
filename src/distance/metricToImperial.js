const  units = require('../units');

function centimeterToInch(cm) {
  return cm/units.cmPerInch;
}

function centimeterToFeet(cm) {
  return centimeterToInch(cm) / units.inchesPerFoot;;
}

function centimeterToYards(cm) {
  return centimeterToFeet(cm) / units.feetPerYard;
}

function meterToFeet(m) {
  return m * units.feetPerMeter;
}

const metricToImperial = {
  centimeterToInch,
  centimeterToFeet,
  centimeterToYards,
  meterToFeet
}

module.exports = metricToImperial;