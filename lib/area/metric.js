"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formulas = _interopRequireDefault(require("./formulas"));

var _distance = _interopRequireDefault(require("../distance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  millimeterToCentimeter,
  millimeterToMeter,
  centimeterToMillimeter
} = _distance.default.metric;

function squareMillimeter(width) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  return _formulas.default.squareArea(width, height);
}

function squareMillimeterToCentimeter(width) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  const cmWidth = millimeterToCentimeter(width);
  const cmHeight = millimeterToCentimeter(height);
  return _formulas.default.squareArea(cmWidth, cmHeight);
}

function squareMillimeterToMeter(width) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  const mWidth = millimeterToMeter(width);
  const mHeight = millimeterToMeter(height);
  return _formulas.default.squareArea(mWidth, mHeight);
}

function squareCentimeterToMillimeter(width) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  const cmWidth = centimeterToMillimeter(width);
  const cmHeight = centimeterToMillimeter(height);
  return _formulas.default.squareArea(cmWidth, cmHeight);
}

const metric = {
  squareMillimeter,
  squareMillimeterToCentimeter,
  squareMillimeterToMeter,
  squareCentimeterToMillimeter
};
var _default = metric;
exports.default = _default;