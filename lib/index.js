"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitXchange = void 0;

var _index = _interopRequireDefault(require("./src/area/index"));

var _index2 = _interopRequireDefault(require("./src/distance/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: change export name or at least make an alias
const unitXchange = {
  area: _index.default,
  distance: _index2.default
};
exports.unitXchange = unitXchange;