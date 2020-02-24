/**
 * 选择排序
 * @param {Array<any>} arr 数组
 */
function selectionSort(arr) {
  let minIndex
  let min
  let len = arr.length
  console.time('Seletion Sort')
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        min = arr[j]
        minIndex = j
      }
    }
    if (i != minIndex) {
      let tmp = arr[i]
      arr[i] = min
      arr[minIndex] = tmp
    }
  }
  console.timeEnd('Seletion Sort')
  return arr
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(selectionSort(arr))
