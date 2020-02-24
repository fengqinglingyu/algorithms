// // function test(target: { [prop: string]: any }) {
// //   target.value = 1;
// // }

// function iteratorObj(
//   target: any,
//   name: string,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const obj: object = descriptor.value;
//   const keys: string[] = Object.keys(obj);
//   const length: number = keys.length;
//   const iterator = () => {
//     let index = 0;
//     return {
//       next() {
//         if (index === length - 1) {
//           return { value: obj[keys[index]], done: true };
//         } else {
//           return { value: obj[keys[index]], done: false };
//         }
//       }
//     };
//   };
//   Object.assign(descriptor.value, { [Symbol.iterator]: iterator });
//   return descriptor;
// }

// class Test {
//   @iteratorObj
//   private obj: object;

//   constructor() {
//     this.obj = { test: 1, test2: 2 };
//   }

//   test() {
//     for (let item of this.obj) {
//       console.log(item);
//     }
//   }
// }

// new Test().test();
