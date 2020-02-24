/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) {
    return 0;
  }
  const trimStr = s.trim();
  const arr = trimStr.split(" ");
  const last = arr[arr.length - 1];
  return last.length;
};
