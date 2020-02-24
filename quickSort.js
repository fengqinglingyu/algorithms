/**
 * 快速排序
 * @param {Number[]} nums 需要排序的数字
 * @returns {Number[]}
 */
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const tmp = nums.shift();
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < tmp) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(tmp, quickSort(right));
}

console.log(quickSort([5, 3, 8, 7, 12, 9, 100, 81, 20, 74, 65, 24, 53, 78, 99, 15.45]));
