import formulas from './formulas';
import distance from '../distance';

const {
  millimeterToCentimeter,
  millimeterToMeter,
  millimeterToKilometer,
  centimeterToMillimeter,
  centimeterToMeter,
  centimeterToKilometer,
  meterToMillimeter,
  meterToCentimeter,
  meterToKilometer,
  kilometerToMillimeter,
  kilometerToCentimeter,
  kilometerToMeter
} = distance.metric;

// Millimeter to ...
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

const squareMillimeterToKilometer = (width, height = width) => {
  const mWidth = millimeterToKilometer(width);
  const mHeight = millimeterToKilometer(height);
  return formulas.squareArea(mWidth, mHeight);
};

// Centimeter to ...
const squareCentimeter = (width, height = width) => { 
  return formulas.squareArea(width, height);
};

const squareCentimeterToMillimeter = (width, height = width) => {
  const cmWidth = centimeterToMillimeter(width);
  const cmHeight = centimeterToMillimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareCentimeterToMeter = (width, height = width) => {
  const cmWidth = centimeterToMeter(width);
  const cmHeight = centimeterToMeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareCentimeterToKilometer = (width, height = width) => {
  const cmWidth = centimeterToKilometer(width);
  const cmHeight = centimeterToKilometer(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

// Meter to ...
const squareMeter = (width, height = width) => { 
  return formulas.squareArea(width, height);
};

const squareMeterToMillimeter = (width, height = width) => {
  const cmWidth = meterToMillimeter(width);
  const cmHeight = meterToMillimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareMeterToCentimeter = (width, height = width) => {
  const cmWidth = meterToCentimeter(width);
  const cmHeight = meterToCentimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareMeterToKilometer = (width, height = width) => {
  const cmWidth = meterToKilometer(width);
  const cmHeight = meterToKilometer(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

// Kilometer to ...
const squareKilometer = (width, height = width) => { 
  return formulas.squareArea(width, height);
};

const squareKilometerToMillimeter = (width, height = width) => {
  const cmWidth = kilometerToMillimeter(width);
  const cmHeight = kilometerToMillimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareKilometerToCentimeter = (width, height = width) => {
  const cmWidth = kilometerToCentimeter(width);
  const cmHeight = kilometerToCentimeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const squareKilometerToMeter = (width, height = width) => {
  const cmWidth = kilometerToMeter(width);
  const cmHeight = kilometerToMeter(height);
  return formulas.squareArea(cmWidth, cmHeight);
};

const metric = {
  squareMillimeter,
  squareMillimeterToCentimeter,
  squareMillimeterToMeter,
  squareMillimeterToKilometer,
  squareCentimeter,
  squareCentimeterToMillimeter,
  squareCentimeterToMeter,
  squareCentimeterToKilometer,
  squareMeter,
  squareMeterToMillimeter,
  squareMeterToCentimeter,
  squareMeterToKilometer,
  squareKilometer,
  squareKilometerToMillimeter,
  squareKilometerToCentimeter,
  squareKilometerToMeter
};

export default metric;
