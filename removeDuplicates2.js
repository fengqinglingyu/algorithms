/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len < 3) {
    return len;
  }
  for (let res = 2; res < len; ) {
    if (nums[res] === nums[res - 2]) {
      nums[res++] = nums[res + 1];
    }
  }
  return res;
};
