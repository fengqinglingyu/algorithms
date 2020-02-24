/**
 * 合并排序
 * @param {Array<any>} arr 数组
 */
function mergeSort(arr) {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const mid = parseInt(len / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  console.time('Merge Sort')
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  console.timeEnd('Merge Sort')
  return result
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(mergeSort(arr))
