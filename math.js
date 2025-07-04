function add(y, z) {
  return (x = y + z);
}

function subtract(y, z) {
  return (x = y - z);
}

function multiply(y, z) {
  return (x = y * z);
}

function division(y, z) {
  return (x = y / z);
}

module.exports = {
  division,
  add,
  subtract,
  multiply,
};
