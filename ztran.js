/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arr = new Array(numRows);
  arr.fill('');
  const len = s.length;
  let i = 0;
  while (i < len) {
    for (let row = 0; row < numRows && i < len; row++) {
      arr[row] += s[i++];
    }
    // j 从倒数第二行开始分发，直到第二行为止，首尾两行没有中间数
    for (let j = numRows - 2; j > 0 && i < len; j--) {
      arr[j] += s[i++];
    }
  }

  return arr.join('');
};

convert('PAYPALISHIRING', 3);
