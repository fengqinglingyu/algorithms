/**
 * 希尔排序
 * @param {Array<any>} arr 数组
 */
function shellSort(arr) {
  let len = arr.length
  let div = parseInt(len / 2)
  console.time('Shell Sort')
  for (; div > 0; div = parseInt(div / 2)) {
    for (let i = div; i < len; i++) {
      for (let j = i - div; j >= 0 && arr[j] > arr[j + div]; j = j - div) {
        let tmp = arr[j]
        arr[j] = arr[j + div]
        arr[j + div] = tmp
      }
    }
  }
  console.timeEnd('Shell Sort')
  return arr
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(shellSort(arr))
