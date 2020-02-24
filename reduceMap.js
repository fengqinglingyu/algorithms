Array.prototype.reduceMap =
  Array.prototype.reduceMap ||
  function(fn, context) {
    if (!Array.isArray(this)) {
      throw new Error('must be array');
    }
    const array = this;
    const res = array.reduce((acc, curr, idx, arr) => {
      acc.push(fn.call(context, curr, idx, arr));
      return acc;
    }, []);
    return res;
  };

console.log([1, 2, 3].reduceMap(parseInt));
