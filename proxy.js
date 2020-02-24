const a = [1];

const proxyA = new Proxy(a, {
  get(target, prop, receiver) {
    console.log(`get ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`set ${prop}`);
    return Reflect.set(target, prop, value, receiver);
  }
});

proxyA.push(1);
console.log('===');
proxyA[2] = 2;
proxyA.length;
console.log('===');
proxyA.length = 100;
console.log('===');
proxyA.shift();
