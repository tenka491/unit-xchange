"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _units = _interopRequireDefault(require("../units"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function feetToMeters(ft) {
  return ft / _units.default.feetPerMeter;
}

function feetToCentimeters(ft) {
  return feetToMeters(ft) * 100;
}

function inchesToMeters(inches) {
  return feetToMeters(inches / 12);
}

function inchesToCentimeters(inches) {
  return inches * _units.default.cmPerInch;
}

function inchesToMillimeters(inches) {
  return inchesToCentimeters(inches) * 100;
}

const imperialToMetric = {
  feetToMeters,
  feetToCentimeters,
  inchesToMeters,
  inchesToCentimeters,
  inchesToMillimeters
};
var _default = imperialToMetric;
exports.default = _default;