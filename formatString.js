/**
 *
 * @param {String} str 字符串
 */
function formatString(str) {
  const splitArr = str.split("]").slice(0, -1);
  const numValueArr = splitArr.map(item => {
    return item.split("[");
  });
  let result = "";
  numValueArr.forEach(item => {
    while (item[0] > 0) {
      item[0]--;
      result += item[1];
    }
  });
  return result;
}

/**
 *
 * @param {String} str 字符串
 */
function decodeString(str) {
  const stack = [];
  const strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    if (str[i] !== "]") {
      stack.push(str[i]);
    } else {
      let curr = "";
      while (stack[stack.length - 1] !== "[") {
        const end = stack.pop();
        curr = end + curr;
      }
      stack.pop();
      let count = "";
      while (
        stack.length &&
        stack[stack.length - 1] >= "0" &&
        stack[stack.length - 1] <= "9"
      ) {
        count = stack.pop() + count;
      }
      const retString = curr.repeat(count);
      stack.push(retString);
    }
  }
  return stack.join();
}

console.log(decodeString("100[leetcode]"));
