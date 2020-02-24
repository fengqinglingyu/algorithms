/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const res = [];
  nums.sort((curr, next) => curr - next);
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (!i || nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = len - 1;
      let reverse = -nums[i];
      while (j < k) {
        const sum = nums[j] + nums[k];
        if (sum === reverse) {
          res.push([nums[i], nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          while (j < k && nums[k - 1] === nums[k]) {
            k--;
          }
          j++;
          k--;
        } else if (sum < reverse) {
          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }
          j++;
        } else {
          while (j < k && nums[k - 1] === nums[k]) {
            k--;
          }
          k--;
        }
      }
    }
  }
  return res;
}

threeSum([-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0]);
