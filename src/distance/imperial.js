const inchesToFeet = inches => inches / 12;

const inchesToYards = inches => inchesToFeet(inches) / 3;

const feetToInches = feet => feet * 12;

const imperial = {
  inchesToFeet,
  inchesToYards,
  feetToInches
};

export default imperial;
