/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function fourSum(nums, target) {
  const res = [];
  nums.sort((curr, next) => curr - next);
  const len = nums.length;
  for (let m = 0; m < len - 3; m++) {
    if (m && nums[m - 1] === nums[m]) continue;
    for (let i = m + 1; i < len - 2; i++) {
      if (i > m + 1 && nums[i] === nums[i - 1]) continue;
      let j = i + 1;
      let k = len - 1;
      let reverse = target - (nums[i] + nums[m]);
      while (j < k) {
        const sum = nums[j] + nums[k];
        if (sum === reverse) {
          res.push([nums[m], nums[i], nums[j], nums[k]]);
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

fourSum([[0, 0, 0, 0]]);
