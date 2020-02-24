/**
 *
 * @param {String} a
 * @param {String} b
 */
function addBinary(a, b) {
  let carry = 0;
  let res = '';
  let aLen = a.length - 1;
  let bLen = b.length - 1;
  while (aLen >= 0 || bLen >= 0 || carry) {
    const aTmp = a[aLen] || '0';
    const bTmp = b[bLen] || '0';
    res = (aTmp ^ bTmp ^ carry).toString() + res;
    if (carry) {
      carry = aTmp === '1' || bTmp === '1';
    } else {
      carry = aTmp === '1' && bTmp === '1';
    }
    aLen--;
    bLen--;
  }
  return res;
}

console.log(addBinary('111', '11'));
