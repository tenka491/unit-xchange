const imperial = require('./distance/imperial.distance');
const metric = require('./distance/metric.distance');

const unitXchange = {
  imperial,
  metric
};

module.exports = unitXchange;
