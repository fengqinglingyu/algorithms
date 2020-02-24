/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const len = nums.length;
  const res = [];
  const path = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= len; i++) {
    backtrack(res, path, i, 0, nums);
  }
  return res;
};

function backtrack(res, path, len, start, nums) {
  if (path.length === len) {
    res.push([...path]);
    return;
  }
  for (let i = start; i < nums.length; i++) {
    // // 可重复
    if (i > start && nums[i] == nums[i - 1]) {
      continue;
    }
    // // 可重复
    path.push(nums[i]);
    backtrack(res, path, len, i + 1, nums);
    path.pop();
  }
}

console.log(subsets([1, 2, 2]));
