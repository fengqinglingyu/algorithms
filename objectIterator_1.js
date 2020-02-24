const obj = {
  test: 1,
  test2: 2,
  test4: 3
};

// do not use yield
// Object.defineProperty(obj, Symbol.iterator, {
//   enumerable: false,
//   writable: true,
//   configurable: true,
//   value: () => {
//     const keys = Object.keys(obj);
//     const length = keys.length;
//     let index = 0;
//     return {
//       next() {
//         if (length === index) {
//           return { value: undefined, done: true };
//         } else {
//           const value = obj[keys[index]];
//           index++;
//           return { value, done: false };
//         }
//       }
//     };
//   }
// });

// use yield
Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: true,
  configurable: true,
  value: function*() {
    const keys = Object.keys(obj);
    const length = keys.length;
    let idx = 0;
    while (idx < length) {
      yield obj[keys[idx++]];
    }
  }
});

for (let i of obj) {
  console.log(i);
}
