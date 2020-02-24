/**
 * @param arr {number[]}
 */
function sortZero(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1)[0]);
      i -= 1;
      len -= 1;
    }
  }
  console.log(arr);
}

sortZero([0, 1, 0, 3, 12]);
