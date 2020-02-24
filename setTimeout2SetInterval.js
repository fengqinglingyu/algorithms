function setTimeout2SetInterval(...args) {
  let timer; /* = {
    value: -1,
    valueOf: function() {
      return this.value;
    },
  }; */
  const handler = args[0];
  const time = args[1];
  const handlerArgs = args.slice(2);
  const callback = () => {
    // 区别在这
    timer = setTimeout(callback, time);
    handler.apply(this, handlerArgs);
  };
  timer = setTimeout(callback, time);
  return () => {
    clearTimeout(timer);
  };
}

const timer = setTimeout2SetInterval(
  n => {
    console.log(n);
  },
  1000,
  1
);
setTimeout(() => {
  timer();
}, 5000);
