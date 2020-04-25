"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _units = _interopRequireDefault(require("../units"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function centimeterToInch(cm) {
  return cm / _units.default.cmPerInch;
}

function centimeterToFeet(cm) {
  return centimeterToInch(cm) / _units.default.inchesPerFoot;
  ;
}

function centimeterToYards(cm) {
  return centimeterToFeet(cm) / _units.default.feetPerYard;
}

function meterToFeet(m) {
  return m * _units.default.feetPerMeter;
}

const metricToImperial = {
  centimeterToInch,
  centimeterToFeet,
  centimeterToYards,
  meterToFeet
};
var _default = metricToImperial;
exports.default = _default;