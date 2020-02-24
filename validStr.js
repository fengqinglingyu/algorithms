/**
 * @param {string} s
 * @return {Boolean}
 */
function isValid(s) {
  if (!s) {
    return true;
  }
  const len = s.length;
  if (len % 2) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < len; i++) {
    const item = s[i];
    if (stack.length) {
      const tmp = stack[stack.length - 1] + item;
      if (isMatch(tmp)) {
        stack.pop();
      } else {
        stack.push(item);
      }
    } else {
      stack.push(item);
    }
  }
  return stack.length === 0;
}

/**
 *
 * @param {String} str
 * @return {Boolean}
 */
function isMatch(str) {
  if (str === '()' || str === '[]' || str === '{}') {
    return true;
  }
  return false;
}

isValid('{]');
