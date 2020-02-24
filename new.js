/**
 * 模拟 new 的方法
 * @param {Function} Con 构造函数
 * @param  {...any} args 参数
 */
function create(Con, ...args) {
  const obj = {}
  obj.__proto__ = Con.prototype
  const result = Con.apply(obj, args)
  return result
}

class Test {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

Test.prototype.getName = function() {
  return this.name
}

const a = create(Test, 'Lily', 20)

console.log(a)
