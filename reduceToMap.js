Array.prototype.reduceToMap = function(fn, context) {
  if (typeof fn !== 'function') {
    throw 'Function Please';
  }

  return this.reduce((prev, curr, index, array) => {
    prev.push(fn.call(context, curr));
    return prev;
  }, []);
};

console.log([1, 2, 3, 4].reduceToMap(item => item * 2));
