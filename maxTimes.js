/**
 *
 * @param {string} str
 */
function maxTimes(str) {
  const res = Array.from(str).reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return res;
}

console.log(maxTimes('abcabcabcbbccccc'));
