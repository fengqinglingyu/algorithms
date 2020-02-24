class SuperType {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  static getName() {
    return this.name
  }

  getAge() {
    return this.age
  }
}

class SubType extends SuperType {
  constructor(name, age, job) {
    super(name, age)
    this.job = job
  }

  static testName() {
    return super.getName() + 'Found'
  }

  getJob() {
    return this.job
  }
}

const sub = new SubType('Lily', 30, 'IT')

console.log(sub)
