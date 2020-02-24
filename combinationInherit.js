function SuperType(name, age) {
  this.name = name
  this.age = age
  this.colors = ['red', 'pink', 'purple']
}

SuperType.test = () => {
  console.log('Test')
}

SuperType.prototype.getName = function() {
  console.log(this.name)
}

SuperType.prototype.getAge = function() {
  console.log(this.age)
}

SuperType.prototype.getColors = function() {
  console.log(this.colors)
}

function SubType(name, age, job) {
  SuperType.call(this, name, age)
  this.job = job
}

SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType
SubType.prototype.getJob = function() {
  console.log(this.job)
}

const s1 = new SubType('Jack', 29, 'IT')
const s2 = new SubType('Tom', 50, 'NE')

s1.colors.push('blue')
console.log(s1.getColors())

const a = function() {}

console.log(s1)
console.log(s2)
console.log(s2.getAge())
