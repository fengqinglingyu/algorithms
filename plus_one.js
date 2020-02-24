/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  const res = [];
  const last = digits.pop();
  if (last + 1 === 10) {
    carry = 1;
    res.unshift(0);
  } else {
    res.unshift(last + 1);
    res.unshift(...digits);
    return res;
  }
  while (digits.length) {
    const item = digits.pop();
    if (item + carry === 10) {
      carry = 1;
      res.unshift(0);
    } else {
      res.unshift(last + carry);
      res.unshift(...digits);
      return res;
    }
  }
  if (carry) {
    res.unshift(carry);
  }
  return res;
};

plusOne([2, 4, 9, 3, 9]);
