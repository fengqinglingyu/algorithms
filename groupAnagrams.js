/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj = new Map();
  strs.forEach(i => {
    const tmp = i
      .split("")
      .sort()
      .join("");
    if (!obj.has(tmp)) {
      obj.set(tmp, [i]);
    } else {
      obj.get(tmp).push(i);
    }
  });
  return [...obj.values()];
};
