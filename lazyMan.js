class lazyManClass {
  constructor(man) {
    this.man = man;
    this.queue = [];
    console.log(`Hi I am ${man}`);
    setTimeout(() => {
      this.next();
    });
  }
  eat(food) {
    const task = () => {
      setTimeout(() => {
        console.log(`I am eating ${food}`);
        this.next();
      });
    };
    this.queue.push(task);
    return this;
  }
  sleep(t) {
    const task = () => {
      setTimeout(() => {
        console.log(`wait for ${t} seconds`);
        this.next();
      }, t * 1000);
    };
    this.queue.push(task);
    return this;
  }
  sleepFirst(t) {
    const task = () => {
      setTimeout(() => {
        console.log(`wait for ${t} seconds`);
        this.next();
      }, t * 1000);
    };
    this.queue.unshift(task);
    return this;
  }
  next() {
    const task = this.queue.shift();
    task && task();
  }
}

function lazyMan(man) {
  return new lazyManClass(man);
}

lazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(4)
  .eat('junk food');
