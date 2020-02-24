/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      index = i;
      break;
    }
  }
  return index;
};

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }
  return left;
};
