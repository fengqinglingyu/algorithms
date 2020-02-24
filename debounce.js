/**
 * 返回一个防抖动函数，ES6 version
 * @param {Function} fn 执行防抖的函数
 * @param {Number} delay 延时
 * @param {Number} isImmediate 是否立即执行一次
 * @returns 防抖函数
 */
function debounce(fn, delay = 300, isImmediate = false) {
  let timer = null
  return (...args) => {
    console.log(args)
    if (!timer && isImmediate) {
      fn.apply(this, args)
    }

    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 返回一个节流函数，ES6 version
 * @param {Function} fn 执行节流的函数
 * @param {Number} delay 延时
 * @param {Number} isImmediate 是否立即执行一次
 * @returns 节流函数
 */
function throttle(fn, delay = 300, isImmediate = true) {
  let isNow = isImmediate
  let timer = null
  return (...args) => {
    console.log(args)

    if (isNow && !timer) {
      fn.apply(this, args)
      isNow = false
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
