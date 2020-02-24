/**
 * 数组去重，排序和，扁平化
 * @param {Array<any>} arr 待处理的数组
 */
function arrayFlatAndSort(arr) {
  return [...new Set(arr.flat(Infinity))].sort((val, next) => val - next)
}
