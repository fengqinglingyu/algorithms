/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  let a = 1,
    b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
};
