"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0RBQXNEO0FBQ3RELHlCQUF5QjtBQUN6QixPQUFPO0FBRVAsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQiwwQ0FBMEM7QUFDMUMsNkNBQTZDO0FBQzdDLHdDQUF3QztBQUN4Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsc0NBQXNDO0FBQ3RDLDREQUE0RDtBQUM1RCxtQkFBbUI7QUFDbkIsNkRBQTZEO0FBQzdELFlBQVk7QUFDWixVQUFVO0FBQ1YsU0FBUztBQUNULE9BQU87QUFDUCxzRUFBc0U7QUFDdEUsdUJBQXVCO0FBQ3ZCLElBQUk7QUFFSixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUV6QixvQkFBb0I7QUFDcEIsd0NBQXdDO0FBQ3hDLE1BQU07QUFFTixhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUk7QUFFSixxQkFBcUIifQ==