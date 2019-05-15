function inchesToFeet(inches) {
  return inches / 12;
}

function inchesToYards(inches) {
  return inchesToFeet(inches) / 3;
}

function feetToInches(feet) {
  return feet * 12;
}


const imperial = {
  inchesToFeet,
  inchesToYards,
  feetToInches
}

module.exports = imperial;