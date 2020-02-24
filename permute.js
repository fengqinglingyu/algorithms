/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const used = new Array(3).fill(0);
  const res = [];
  const path = [];
  generatePath(nums, res, used, path);
  return res;
};

/**
 *
 * @param {number[]} nums
 * @param {number[][]} res
 * @param {boolean[]} used
 * @param {number[]} path
 */
var generatePath = function(nums, res, used, path) {
  const len = nums.length;
  if (len === path.length) {
    res.push([...path]);
    return;
  }
  for (let i = 0; i < len; i++) {
    if (!used[i]) {
      path.push(nums[i]);
      used[i] = 1;
      generatePath(nums, res, used, path);
      used[i] = 0;
      path.pop();
    }
  }
};

console.log(permute([1, 2, 3, 4]));
