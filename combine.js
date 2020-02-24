/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (k === 0) {
    return [[]];
  }
  const res = [];
  const path = [];
  backtrack(1, n, k, res, path);
  return res;
};

function backtrack(start, end, num, res, path) {
  if (path.length === num) {
    res.push([...path]);
    return;
  }
  for (let i = start; i <= end; i++) {
    path.push(i);
    backtrack(i + 1, end, num, res, path);
    path.pop();
  }
  return res;
}

// var combine = function(n, k) {
//   var res = [];
//   var could = [];
//   if (k == 0) {
//     return [[]];
//   }
//   function dfs(start, n, k, res, could) {
//     if (could.length == k) {
//       res.push(could.slice(0));
//       return;
//     }
//     for (var i = start; i < n + 1; i++) {
//       could.push(i);
//       dfs(i + 1, n, k, res, could);
//       could.pop();
//     }
//     return res;
//   }
//   return dfs(1, n, k, res, could);
// };

console.log(combine(4, 2));
