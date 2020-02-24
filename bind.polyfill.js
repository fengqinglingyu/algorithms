// /**
//  * bind 的 polyfill， 在 ES3 环境实现bind的效果
//  * @param {Object} bind函数的对象
//  */
// Function.prototype.bind =
//   Function.prototype.bind ||
//   function(obj) {
//     if (typeof this != 'function') {
//       return
//     }
//     var args = Array.prototype.slice.call(arguments, 1)
//     var funcThis = this
//     var F = function() {}
//     // var F = Object.create(this.prototype)
//     var bindFunc = function() {
//       return funcThis.apply(
//         this instanceof F ? this : obj,
//         Array.prototype.concat(args, arguments)
//       )
//     }
//     F.prototype = this.prototype
//     bindFunc.prototype = new F()

//     return bindFunc
//   }

Function.prototype.myBind = function(oThis) {
  if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable'
    )
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
      console.log(this instanceof fNOP)
      return fToBind.apply(
        this instanceof fNOP ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments))
      )
    }

  if (this.prototype) {
    // Function.prototype does not have a prototype property
    fNOP.prototype = this.prototype
  }
  fBound.prototype = new fNOP()

  return fBound
}

var o1 = { a: 1 }
var o2 = { b: 2 }
var f = function() {
  console.log(this)
  console.log([].slice.call(arguments))
}

var f1 = f.myBind(o1, 1, 2) // A行
var f2 = f1.myBind(o2, 3, 4) // B行

f2(5, 6) // C行

new f2(5, 6)
