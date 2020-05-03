import units from '../units';

const feetToMeters = ft => ft / units.feetPerMeter;

const feetToCentimeters = ft => feetToMeters(ft) * 100;

const inchesToMeters = inches => feetToMeters(inches / 12);

const inchesToCentimeters = inches => inches * units.centimeterPerInch;

const inchesToMillimeters = inches => inchesToCentimeters(inches) * 100;

const imperialToMetric = {
  feetToMeters,
  feetToCentimeters,
  inchesToMeters,
  inchesToCentimeters,
  inchesToMillimeters
};

export default imperialToMetric;
