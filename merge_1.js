/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const res = [];
  intervals.sort((prev, curr) => prev[0] - curr[0]);
  let currBlock = [intervals[0][0], intervals[0][1]];
  const tmp = intervals.reduce((prev, curr, idx) => {
    if (prev[1] >= curr[0]) {
      if (currBlock[1] < curr[1]) {
        currBlock[1] = curr[1];
      }
      if (idx === intervals.length - 1) {
        res.push(currBlock);
        currBlock = [curr[0], curr[1]];
        return;
      }
    } else {
      if (currBlock[1] < prev[1]) {
        currBlock[1] = prev[1];
      }
      res.push(currBlock);
      currBlock = [curr[0], curr[1]];
    }
    return currBlock;
  });
  if (tmp) {
    if (currBlock[1] < tmp[1]) {
      currBlock[1] = tmp[1];
    }
    res.push(currBlock);
  }
  return res;
};

console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ])
);
