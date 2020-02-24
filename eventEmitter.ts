class EventEmitter {
  private eventList: { [eventType: string]: Function[] } = {};
  public on(eventType: string, callback: Function): void {
    if (!this.eventList[eventType]) {
      this.eventList[eventType] = [callback];
    } else {
      this.eventList[eventType].push(callback);
    }
  }
  public off(eventType: string, callback: Function): void {
    if (this.eventList[eventType]) {
      this.eventList[eventType] = this.eventList[eventType].filter(
        i => i !== callback
      );
      if (!this.eventList[eventType].length) {
        Reflect.deleteProperty(this.eventList, eventType);
      }
    }
  }
  public once(eventType: string, callback: Function): void {
    const onceFn = () => {
      callback();
      this.off(eventType, onceFn);
    };
    this.on(eventType, onceFn);
  }
  public emit(eventType: string): void {
    if (this.eventList[eventType]) {
      this.eventList[eventType].forEach(fn => {
        fn && fn();
      });
    }
  }
}

const emitter = new EventEmitter();
const offFn = () => {
  console.log('off');
};
emitter.on('click', () => {
  console.log('1');
});
emitter.on('click', offFn);
emitter.once('click', () => {
  console.log('once');
});
emitter.emit('click');
emitter.off('click', offFn);
emitter.emit('click');
emitter.emit('click');
emitter.emit('click');
emitter.off('type', offFn);
emitter.on('click', () => {
  console.log(2);
});
emitter.emit('click');
console.log(emitter);

const emitter2 = new EventEmitter();
console.log(emitter2);

const test: number = 1;
