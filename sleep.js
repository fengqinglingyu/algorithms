/**
 * sleep async/await 实现
 * @param {Number} time 睡眠的时间，单位是毫秒
 */
async function sleepAsyncAwait(time) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/**
 * sleep promise 实现
 * @param {Number} time 睡眠的时间，单位是毫秒
 */
function sleepPromise(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

(async () => {
  console.log('test sleepAsyncAwait');
  await sleepAsyncAwait(10000);
  console.log('sleepAsyncAwait end');
  console.log('test sleepPromise');
  await sleepPromise(5000);
  console.log('sleepPromise end');
})();
