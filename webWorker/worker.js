self.onmessage = e => {
  console.log(e);
  let res = 1n;
  console.time();
  for (let i = 2n; i < 10000000n; i = i + 1n) {
    res += i;
  }
  console.timeEnd();
  self.postMessage({
    type: "from worker",
    message: res
  });
};
