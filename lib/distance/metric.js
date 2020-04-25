"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function millimeterToCentimeter(mm) {
  return mm * 0.1;
}

function millimeterToMeter(mm) {
  return mm * 0.001;
}

function millimeterToKilometer(mm) {
  return millimeterToMeter(mm) * 0.001;
}

function centimeterToMillimeter(cm) {
  return cm * 10;
}

function centimeterToMeter(cm) {
  return cm * 0.01;
}

function centimeterToKilometer(cm) {
  return centimeterToMeter(cm) * 0.01;
}

function meterToMillimeter(m) {
  return m * 1000;
}

function meterToCentimeter(m) {
  return m * 100;
}

function meterToKilometer(m) {
  return m * 0.001;
}

function kilometerToMeter(km) {
  return km * 0.001;
}

function kilometerToCentimeter(km) {
  return kilometerToMeter(km) * 0.01;
}

function kilometerToMillimeter(km) {
  return kilometerToCentimeter(km) * 0.01;
}

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
var _default = metric;
exports.default = _default;