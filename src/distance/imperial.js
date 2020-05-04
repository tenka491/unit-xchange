import units from '../units';
const { inchesPerFoot, feetPerYard, yardsPerMile } = units;

const inchesToFeet = inches => inches / inchesPerFoot;

const inchesToYards = inches => inchesToFeet(inches) / feetPerYard;

const inchesToMiles = inches => inchesToYards(inches) / yardsPerMile;

const feetToInches = feet => feet * inchesPerFoot;

const feetToYards = feet => feet / feetPerYard;

const feetToMiles = feet => feetToYards(feet) / yardsPerMile;

const milesToInches = miles => milesToFeet(miles) * inchesPerFoot;

const milesToFeet = miles => milesToYards(miles) * feetPerYard;

const milesToYards = miles => miles * yardsPerMile;

const imperial = {
  inchesToFeet,
  inchesToYards,
  inchesToMiles,
  feetToInches,
  feetToYards,
  feetToMiles,
  milesToInches,
  milesToFeet,
  milesToYards
};

export default imperial;
