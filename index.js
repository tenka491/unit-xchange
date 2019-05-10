const imperial = require('./src/distance/imperial.distance');
const metric = require('./src/distance/metric.distance');

const unitXchange = {
  imperial,
  metric
};

module.exports = unitXchange;
