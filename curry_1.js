function curry(fn) {
  return function judgeCurry(...args) {
    return fn.length > args.length
      ? (...args1) => judgeCurry(...args, ...args1)
      : fn(...args);
  };
}

var add = (a, b, c, d, e) => a + b + c + d + e;
var curryAdd = curry(add);

curryAdd(1)(2)(3)(4)(5);

function curry2(fn, ...out) {
  const len = fn.length;
  return (...args) => {
    const all = out.concat(args);
    return all.length >= len ? fn(...all) : curry2(fn, ...all);
  };
}

const test = curry2(add);
console.log(curryAdd(1)(2)(3)(4)(5));
console.log(curryAdd(1, 2)(3)(4)(5));
