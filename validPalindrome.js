/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (s.length < 2) {
    return true;
  }
  const isPalindrome = (left, right) => {
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
    }
    return true;
  };
  let length = s.length;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left--;
    right++;
  }
  return true;
};

console.log(validPalindrome("abca"));
