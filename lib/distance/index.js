"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imperial = _interopRequireDefault(require("./imperial"));

var _metric = _interopRequireDefault(require("./metric"));

var _imperialToMetric = _interopRequireDefault(require("./imperialToMetric"));

var _metricToImperial = _interopRequireDefault(require("./metricToImperial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const distance = {
  metric: _metric.default,
  imperial: _imperial.default,
  imperialToMetric: _imperialToMetric.default,
  metricToImperial: _metricToImperial.default
};
var _default = distance;
exports.default = _default;