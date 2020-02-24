var myPow = function(x, n) {
  if (!n) {
    return 1;
  }
  if (!x) {
    return 0;
  }
  let res = 1;
  let tmp = n < 0 ? 1 / x : x;
  let times = Math.abs(n);
  for (; times > 0; times /= 2) {
    if (times % 2) {
      res *= tmp;
    }
    tmp = tmp * tmp;
  }
  return res;
};

myPow(2, 10);
