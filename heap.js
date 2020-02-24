/**
 * 堆排序
 * @param {Array<any>} arr 数组
 */
function heapSort(arr) {
  const arrLen = arr.length
  // 建大顶堆
  for (let i = parseInt(arrLen / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arrLen)
  }
  for (let i = arrLen - 1; i > 0; i--) {
    // 堆顶和最后一个节点交换
    swap(arr, 0, i)
    // 改了顶部的元素，可能造成堆不正常，所以调整堆，剔除已经放到最后的元素
    heapify(arr, 0, i)
  }
  return arr
}

/**
 * 把完成二叉树变成堆
 * @param {Array<any>} arr 要变成堆的数组
 * @param {Number} idx 当前顶的节点的索引，大于idx的节点已经全部变成大顶堆
 * @param {Number} len 数组的长度
 */
function heapify(arr, idx, len) {
  let j = 2 * idx + 1
  for (; j < len; j = 2 * j + 1) {
    let maxChildNode = j
    // 如果存在右节点，并且右节点比左节点大
    if (j + 1 < len && arr[j] < arr[j + 1]) {
      j++
      maxChildNode = j
    }
    // 如果父节点比子节点中的较大的要小，交换值，并且修改当前操作的顶的索引
    if (arr[maxChildNode] > arr[idx]) {
      swap(arr, maxChildNode, idx)
      // idx = maxChildNode
    }
  }
}

/**
 * 交换数组中的两个索引的值
 * @param {Array<any>} arr 需要交换的数组
 * @param {Number} x 交换的索引
 * @param {Number} y 交换的索引
 */
function swap(arr, x, y) {
  const tmp = arr[x]
  arr[x] = arr[y]
  arr[y] = tmp
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(heapSort(arr))
