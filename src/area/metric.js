import formulas from './formulas';
import distance from '../distance';

const {
  millimeterToCentimeter,
  millimeterToMeter,
  centimeterToMillimeter
} = distance.metric;

const squareMillimeter = (width, height = width) => { 
  return formulas.squareArea(width, height);
};

const squareMillimeterToCentimeter = (width, height = width) => {
  const cmWidth = millimeterToCentimeter(width);
  const cmHeight = millimeterToCentimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareMillimeterToMeter = (width, height = width) => {
  const mWidth = millimeterToMeter(width);
  const mHeight = millimeterToMeter(height);
  return formulas.squareArea(mWidth, mHeight);
};

const squareCentimeterToMillimeter = (width, height = width) => {
  const cmWidth = centimeterToMillimeter(width);
  const cmHeight = centimeterToMillimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);

};

const metric = {
  squareMillimeter,
  squareMillimeterToCentimeter,
  squareMillimeterToMeter,
  squareCentimeterToMillimeter
};

export default metric;
