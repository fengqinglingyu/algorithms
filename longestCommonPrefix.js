/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => a.length - b.length);
  if (strs.length || !strs[0].length) {
    return '';
  }
  const len = strs.length;
  let tmp = strs[0];
  let res = '';
  for (let i = 1; i <= tmp.length; i++) {
    const str = tmp.slice(0, i);
    let flag = true;
    for (let j = 1; j < len; j++) {
      if (!strs[j].startsWith(str)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res = str;
    } else {
      break;
    }
  }
  return res;
};
