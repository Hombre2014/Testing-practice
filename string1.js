function stringLength(string) {
  const length = string.length;
  if(length >=1 && length <= 10) {
    return length;
  } else {
    throw "Error - String is 0 or too long";
  }
}

module.exports = stringLength;