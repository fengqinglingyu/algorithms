function fibonacci(num) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < num; i++) {
    const tmp = a;
    a = b;
    b += tmp;
  }
  return a;
}

function fibonacciRecursion(num) {
  if (num < 3) {
    return 1;
  }
  return arguments.callee(num - 1) + arguments.callee(num - 2);
}

console.log(`Item 6 : ${fibonacci(6)}`);
console.log(`Item 5 : ${fibonacciRecursion(5)}`);
