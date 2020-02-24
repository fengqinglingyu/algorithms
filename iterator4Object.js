const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    const len = keys.length;
    let idx = 0;
    return {
      next: () => {
        const done = idx === len;
        const value = this[keys[idx++]];
        return { done, value };
      }
    };
  }
};

for (const item of obj) {
  console.log(item);
}
