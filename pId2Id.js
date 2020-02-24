const arr = [
  { id: 1 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4, pid: 1 },
  { id: 5, pid: 3 },
  { id: 6, pid: 2 },
  { id: 6, pid: 2 },
  { id: 2, pid: 1 },
];

/**
 *
 * @param {Array<any>} arr
 */
function change(arr) {
  const res = [];
  const map = arr.reduce((cur, item) => {
    cur[item.id] = item;
    return cur;
  }, {});
  Object.values(map).forEach(item => {
    if (!item.pid) {
      res.push(item);
    } else {
      const parent = map[item.pid];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  });
  return res;
}

console.log(JSON.stringify(change(arr)));
