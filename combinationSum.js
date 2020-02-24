/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const path = [];
  backtrack(candidates, res, path, 0, target);
  return res;
};

function backtrack(candidates, res, path, start, target) {
  if (target === 0) {
    res.push([...path]);
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (target - candidates[i] >= 0) {
      path.push(candidates[i]);
      backtrack(candidates, res, path, i, target - candidates[i]);
      path.pop();
    }
  }
}

console.log(combinationSum([2, 3, 5], 8));
