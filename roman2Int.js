/**
 *
 * @param {String} s
 */
function romanToInt(s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let len = s.length;
  let integer = obj[s[0]];
  for (let i = 1; i < len; i++) {
    if (obj[s[i]] > obj[s[i - 1]]) {
      integer = integer + obj[s[i]] - 2 * obj[s[i - 1]];
    } else {
      integer += obj[s[i]];
    }
  }
  return integer;
}
