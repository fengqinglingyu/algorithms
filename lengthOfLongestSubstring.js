/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const array = []
  const len = s.length
  if (!len) {
    return 0
  } else if (len === 1) {
    return 1
  }
  for (let i = 0; i < len; i++) {
    let str = s[i]
    for (let j = i + 1; j < len; j++) {
      if (str.indexOf(s[j]) === -1) {
        str += s[j]
        if (j === len - 1) {
          array.push(str.length)
          break
        }
      } else {
        array.push(str.length)
        break
      }
    }
  }
  return Math.max.apply(null, array)
}

lengthOfLongestSubstring('abcabcbb')
