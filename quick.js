/**
 * 快速排序
 * @param {Array<any>} arr 数组
 */
function quickSort(arr) {
  const len = arr.length
  if (arr.length < 2) {
    return arr
  }
  const mid = parseInt(len / 2)
  const pivot = arr.splice(mid, 1)[0]

  const left = []
  const right = []
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(quickSort(arr))
