function SuperType() {}
SuperType.prototype = {
  name: 'Test',
  colors: ['red', 'purplr']
}

var a = new SuperType()
var b = new SuperType()

a.name = 'Test1'
a.colors.push('blue')

console.log('b:', b)
console.log('a:', a)

/**
 * 原型式继承
 * @param {Object} obj 需要继承的对象
 */
function prototypeInherit(obj) {
  var F = function() {}
  F.prototype = obj
  return F
}
