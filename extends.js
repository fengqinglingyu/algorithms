function MyArray() {}

Object.setPrototypeOf(MyArray.prototype, Array.prototype)

var instance = new MyArray(0, 1)

console.log(instance)
