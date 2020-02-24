/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function(numerator, denominator) {
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString();
  }
  const absDenominator = Math.abs(denominator);
  const absNumerator = Math.abs(numerator);
  let res = ((absNumerator / absDenominator) >> 0).toString();
  if (
    (numerator < 0 && denominator > 0) ||
    (numerator > 0 && denominator < 0)
  ) {
    res = "-" + res;
  }
  let remainder = Math.abs(absNumerator % absDenominator);
  const arr = [];
  const remArr = [];
  while (remainder) {
    const idx = remArr.indexOf(remainder);
    if (idx > -1) {
      arr.splice(idx, 0, "(");
      arr.push(")");
      break;
    }
    remArr.push(remainder);
    remainder *= 10;
    const div = (remainder / absDenominator) >> 0;
    if (remainder % absDenominator === 0) {
      arr.push(div);
      break;
    } else {
      arr.push(div);
      remainder %= absDenominator;
    }
  }
  if (arr.length) {
    res = res + "." + arr.join("");
  }
  return res;
};

console.log(fractionToDecimal(7, -12));
