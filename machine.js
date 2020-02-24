function machine(act) {
  return new Action(act)
}

function defer(cb, time) {
  return new Promise(resolve => {
    if (!time) {
      resolve(cb())
    } else {
      setTimeout(() => {
        resolve(cb())
      }, time * 1000)
    }
  })
}

class Action {
  constructor(act) {
    this.act = act
    this.query = [`start ${act}`]
  }
  do(action) {
    this.query.push(`${this.act} ${action}`)
    return this
  }
  wait(time) {
    this.query.push({ wait: time })
    return this
  }
  waitFirst(time) {
    this.query.unshift({ wait: time })
    return this
  }

  async execute() {
    while (this.query.length) {
      const item = this.query.shift()
      if (typeof item === 'string') {
        await defer(() => console.log(item))
      } else {
        await defer(() => console.log(`wait ${item.wait}s`), item.wait)
      }
    }
  }
}

// machine('ygy')
//   .waitFirst(5)
//   .do('eat')
//   .execute()

machine('ygy')
  .wait(5)
  .do('eat')
  .execute()
