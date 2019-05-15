const imperial = require('./src/distance/imperial');
const metric = require('./src/distance/metric');
const imperialToMetric = require('./src/distance/imperialToMetric')
const metricToImperial = require('./src/distance/metricToImperial')

const distance = {
  metric,
  imperial,
  imperialToMetric,
  metricToImperial
}

module.exports = distance;
