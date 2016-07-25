function circleNumber(n) {
  n = parseInt(n, 10);

  if (n === 0) {
    return String.fromCharCode(9450);
  }

  if (1 <= n && n <= 20) {
    return String.fromCharCode(9312 + n - 1);
  }

  if (21 <= n && n <= 35) {
    return String.fromCharCode(12881 + n - 21);
  }

  if (36 <= n && n <= 50) {
    return String.fromCharCode(12977 + n - 36);
  }

  throw new Error(`${n} is Unsupported number.`);
}

module.exports = circleNumber;
