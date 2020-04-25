import units from '../units';

function feetToMeters(ft) {
  return ft / units.feetPerMeter;
}

function feetToCentimeters(ft) {
  return feetToMeters(ft) * 100;
}

function inchesToMeters(inches) {
  return feetToMeters(inches / 12);
}

function inchesToCentimeters(inches) {
  return inches * units.cmPerInch;
}

function inchesToMillimeters(inches) {
  return inchesToCentimeters(inches) * 100;
}

const imperialToMetric = {
  feetToMeters,
  feetToCentimeters,
  inchesToMeters,
  inchesToCentimeters,
  inchesToMillimeters
};

export default imperialToMetric;
