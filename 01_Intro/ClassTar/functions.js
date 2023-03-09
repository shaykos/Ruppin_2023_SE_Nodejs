
exports.MaxNum = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
}

exports.PrintStr = (str, n) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
}

exports.AmountAfterDot = (num) => {
  let counter = 0;
  while (num - parseInt(num) > 0) {
    counter++;
    num *= 10;
  }
  return counter;
}