/**
 * 手动实现的 new
 */
function myNew(Ctor) {
  var args = [].slice.call(arguments, 1);
  var obj = {};
  obj.__proto__ = Ctor.prototype;
  var res = Ctor.apply(obj, args);
  return typeof res === 'object' ? res : obj;
}

function Test(int, bool) {
  this.int = int;
  this.bool = bool;

  return { bb: 1 };
}

const test = myNew(Test, 1, false);

console.log(test);
