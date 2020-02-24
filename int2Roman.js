/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  const rate = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']
  ];
  const arr = [];
  while (num) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  let res = '';
  for (let i = 0, len = arr.length; i < len; i++) {
    const n = arr[i];
    if (n) {
      const str = rate[i][n - 1];
      res = str + res;
    }
  }
  return res;
}
