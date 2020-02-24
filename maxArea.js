/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  const len = height.length;
  let i = 0,
    j = len - 1;
  let res = 0;
  while (i < j) {
    let min = 0;
    const dis = j - i;
    if (height[i] < height[j]) {
      min = height[i];
      i++;
    } else {
      min = height[j];
      j--;
    }
    res = Math.max(res, min * dis);
  }
  return res;
}
