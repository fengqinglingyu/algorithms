/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  const arr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    arr.push(new Array(i + 1).fill(1));
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  return arr;
};

console.log(generate(5));
