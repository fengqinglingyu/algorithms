const log = console.log.bind(console)

// function add(a, b) {
//   return a + b
// }

log(addFn(1, 100, 3, 20, 1200))

function curry(fn, ...args) {
  const len = fn.length
  return (...innerArgs) => {
    const combineArgs = [...args, ...innerArgs]
    if (combineArgs.length < len) {
      return curry(fn, ...combineArgs)
    }
    return fn(...combineArgs)
  }
}

function addFn(a, b, c, d, e) {
  return a + b + c + d + e
}

const add = curry(addFn)

log()
