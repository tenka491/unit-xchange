const inchesToFeet = (params) => {
  return params / 12;
}

const feetToInches = (params) => {
  return params * 12;
}


const imperial = {
  inchesToFeet,
  feetToInches
}

module.exports = imperial;