import units from '../units';

const centimeterToInch = cm => cm/units.centimeterPerInch;

const centimeterToFeet = cm => centimeterToInch(cm) / units.inchesPerFoot;;

const centimeterToYards = cm => centimeterToFeet(cm) / units.feetPerYard;

const meterToFeet = (m) => m * units.feetPerMeter;

const metricToImperial = {
  centimeterToInch,
  centimeterToFeet,
  centimeterToYards,
  meterToFeet
};

export default metricToImperial;
