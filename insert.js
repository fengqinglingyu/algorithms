/**
 * 插入排序
 * @param {Array<any>} arr 数组
 */
function insertSort(arr) {
  console.time('Insert Sort')
  for (let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i]
    let j = i - 1
    // 用 while
    // while (j >= 0 && key < arr[j]) {
    //   arr[j + 1] = arr[j]+
    //   j--
    // }

    // 每次都交换
    for (; j >= 0 && arr[j + 1] < arr[j]; j--) {
      let tmp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = tmp
    }

    // 只交换一次
    // for (; j >= 0 && key < arr[j]; j--) {
    //   arr[j + 1] = arr[j]
    // }
    // arr[j + 1] = key
  }
  console.timeEnd('Insert Sort')
  return arr
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(insertSort(arr))

/**
 *
 * @param {Array<any>} array 数组
 */
function binaryInsertSort(arr) {
  console.time('Binary Insert Sort')
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let left = 0
    let right = i - 1

    while (left <= right) {
      let middle = parseInt((left + right) / 2)
      if (key < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = key
  }
  console.timeEnd('Binary Insert Sort')
  return arr
}

console.log(binaryInsertSort(arr1))
