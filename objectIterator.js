var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    const len = keys.length;
    let idx = 0;
    return {
      next: () => {
        const value = this[keys[idx]];
        const done = idx >= len;
        idx++;
        return { value, done };
      }
    };
  }
};

for (let i of obj) {
  console.log(i);
}
