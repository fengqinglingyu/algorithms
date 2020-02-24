/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let res = 0;
  while (res * res < x) {
    res++;
  }
  if (res * res === x) {
    return res;
  }
  return res - 1;
};

console.log(mySqrt(226));
