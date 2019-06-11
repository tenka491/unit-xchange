const formulas = require('./formulas');
const distance = require('../distance');
const {
  millimeterToCentimeter,
  millimeterToMeter,
  centimeterToMillimeter
} = distance.metric;

function squareMillimeter(width, height = width) {  
  return formulas.squareArea(width, height);
}

function squareMillimeterToCentimeter(width, height = width) {
  const cmWidth = millimeterToCentimeter(width);
  const cmHeight = millimeterToCentimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
}

function squareMillimeterToMeter(width, height = width) {
  const mWidth = millimeterToMeter(width);
  const mHeight = millimeterToMeter(height);
  return formulas.squareArea(mWidth, mHeight);
}

function squareCentimeterToMillimeter(width, height = width) {
  const cmWidth = centimeterToMillimeter(width);
  const cmHeight = centimeterToMillimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);

}

const metric = {
  squareMillimeter,
  squareMillimeterToCentimeter,
  squareMillimeterToMeter,
  squareCentimeterToMillimeter
}

module.exports = metric;
