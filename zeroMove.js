/**
 *
 * @param {Array} arr
 */
function zeroMove(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      arr.push(0);
      i--;
      len--;
    }
  }
  console.log(arr);
}
