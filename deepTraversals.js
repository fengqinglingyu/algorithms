function deepTraversals(obj) {
  let res = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      res[key] = deepTraversals(value);
    } else {
      res[key] = value;
    }
  });
  return res;
}
