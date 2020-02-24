/**
 *
 * @param {Array} arr 待排序数组
 */
function insertSort(arr) {
  const arrLen = arr.length;
  for (let i = 1; i < arrLen; i++) {
    let e = arr[i];
    let j = i;
    for (; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

console.log(insertSort([2, 3, 1, 4, 8, 10, 45, 6, 7, 20]));

// const arr = [];
// for (let i = 0; i < 10000; i++) {
//   arr.push(Math.floor(Math.random() * 10000000));
// }

// console.time();
// insertSort(arr);
// console.timeEnd();
