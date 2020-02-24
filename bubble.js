/**
 * 冒泡排序
 * @param {Array<any>} array 数组
 */
function bubble(array) {
  for (let i = 0, len = array.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    // console.log(array)
  }
  return array;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const arr1 = [5, 4, 3, 2, 1];

console.log(bubble(arr));
// console.log(bubble(arr1))
