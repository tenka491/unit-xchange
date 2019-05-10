const cmToMm = (params) => {
  return params * 10;
}

const mmToCm = (params) => {
  return params / 10;
}

const metric = {
  cmToMm,
  mmToCm
}

module.exports = metric;
