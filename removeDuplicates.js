/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    const item = nums[i];
    if (nums.indexOf(item) !== i) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
