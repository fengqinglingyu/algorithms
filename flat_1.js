/**
 *
 * @param {any[]} arr 数组
 * @param {number} deep 铺平深度
 */
const flat = (arr, deep = Infinity) =>
  arr.reduce((prev, curr) => {
    !Array.isArray(curr) || deep === 0
      ? prev.push(curr)
      : prev.push(...flat(curr, --deep));
    return prev;
  }, []);

const flat2 = arr => {
  const res = [];
  while (arr.length) {
    const item = arr.shift();
    if (Array.isArray(item)) {
      arr.unshift(...item);
    } else {
      res.push(item);
    }
  }
  return res;
};

const flat3 = (arr, deep = Infinity) =>
  arr.reduce(
    (prev, curr) =>
      !Array.isArray(curr) || deep === 0
        ? [...prev, curr]
        : [...prev, ...flat3(curr, --deep)],
    []
  );

console.log(flat([1, 3, 4, 5, [7, 8, [9, [11]]], 10], 1));
console.log(flat2([1, 3, 4, 5, [7, 8, [9, [11]]], 10]));
console.log(flat3([1, 3, 4, 5, [7, 8, [9, [11]]], 10], 2));
