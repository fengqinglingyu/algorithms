/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  let res = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (i && nums[i - 1] === nums[i]) {
      continue;
    }
    let j = i + 1;
    k = len - 1;
    while (j < k) {
      const count = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - count) < Math.abs(target - res)) {
        res = count;
      }
      if (count === target) {
        return target;
      } else if (count < target) {
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        j++;
      } else {
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        k--;
      }
    }
  }
  return res;
};

threeSumClosest([-1, 2, 1, -4], 1);
