/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const len = s.length;
  const stack = [];
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      const num = stack.pop();
      if (!stack.length) {
        stack.push(i);
      }
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
};

longestValidParentheses('(()');
