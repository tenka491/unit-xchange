const imperial = require('./imperial');
const metric = require('./metric');
const imperialToMetric = require('./imperialToMetric')
const metricToImperial = require('./metricToImperial')

const distance = {
  metric,
  imperial,
  imperialToMetric,
  metricToImperial
}

module.exports = distance;
