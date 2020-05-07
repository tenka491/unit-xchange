const millimeterToCentimeter = mm => mm * 0.1;

const millimeterToMeter = mm =>  mm * 0.001;

const millimeterToKilometer = mm => millimeterToMeter(mm) * 0.001;

const centimeterToMillimeter = cm => cm * 10;

const centimeterToMeter = cm => cm * 0.01;

const centimeterToKilometer = cm => centimeterToMeter(cm) * 0.01;

const meterToMillimeter = m => m * 1000;

const meterToCentimeter = m => m * 100;

const meterToKilometer = m => m * 0.001;

const kilometerToMeter = km => km * 1000;

const kilometerToCentimeter = km => km * 100000;

const kilometerToMillimeter = km => km * 1000000;

const metric = {
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
};

export default metric;
