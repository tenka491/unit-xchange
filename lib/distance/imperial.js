"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
};
var _default = imperial;
exports.default = _default;