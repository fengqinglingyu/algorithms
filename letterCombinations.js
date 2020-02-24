/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  var dict = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  const track = [];
  const res = [];
  backtrack(digits, 0, res, track, dict);
  return res;
};

function backtrack(digits, cur, res, track, dict) {
  const len = digits.length;
  if (len === cur) {
    res.push(track.join(""));
    return;
  }
  const item = digits[cur];
  const arr = dict[item];
  for (let i = 0; i < arr.length; i++) {
    track.push(arr[i]);
    backtrack(digits, cur + 1, res, track, dict);
    track.pop();
  }
}

console.log(letterCombinations("23"));
