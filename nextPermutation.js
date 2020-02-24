/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length;
  let outTarget = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      outTarget = i;
      let target = len - 1;
      for (let j = i; j < len; j++) {
        if (nums[i - 1] >= nums[j]) {
          target = j - 1;
          break;
        }
      }
      swap(nums, i - 1, target);
      break;
    }
  }
  let k = len - 1;
  while (outTarget < k) {
    swap(nums, outTarget, k);
    outTarget++;
    k--;
  }
};

function swap(num, x, y) {
  let tmp = num[x];
  num[x] = num[y];
  num[y] = tmp;
}

nextPermutation([1, 5, 1]);
