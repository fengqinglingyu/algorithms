/**
 * 示例输入 [2, 10, 3, 4, 5, 11, 10, 11, 20]
 * 示例输出 [[2, 3, 4, 5], [10, 11], [20]]
 * @param {any[]} arr 待处理数组
 * @returns {any[]}
 */
function seriesArray(arr) {
  const tmp = [];
  const res = [];
  const array = [...new Set(arr)];
  array.sort((a, b) => a - b);
  array.reduce((acc, curr, idx) => {
    if (!idx || acc === curr) {
      tmp.push(curr);
      return ++curr;
    } else {
      res.push([...tmp]);
      tmp.length = 0;
      tmp.push(curr);
      return ++curr;
    }
  }, array[0]);
  if (tmp.length) {
    res.push(tmp);
  }
  return res;
}

console.log(seriesArray([2, 10, 3, 4, 5, 11, 10, 11, 20]));
