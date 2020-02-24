/**
 * 快速排序
 * @param {Number[]} nums 需要排序的数字
 * @returns {Number[]}
 */
function shellSort(nums) {
  const len = nums.length;
  let div = Math.floor(len / 2);
  while (div > 0) {
    for (let i = div; i < len; i++) {
      for (let j = i; j >= div && nums[j] < nums[j - div]; j = j - div) {
        [nums[j], nums[j - div]] = [nums[j - div], nums[j]];
      }
    }
    div = Math.floor(div / 2);
  }
  return nums;
}

console.log(shellSort([5, 3, 8, 7, 12, 9, 100, 81, 20, 74, 65, 24, 53, 78, 99, 15.45]));
