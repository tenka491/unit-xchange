function centimeterToMillimeter(cm){
  return cm * 10;
}

function millimeterToCentimeter(mm) {
  return mm / 10;
}

function centimeterToMeters(cm) {
  return cm / 100;
}

const metric = {
  centimeterToMillimeter,
  millimeterToCentimeter,
  centimeterToMeters
}

module.exports = metric;
