/**
 *
 * @param {Number} sec
 */
function sleepPromise(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('tes');
      resolve('sleepPromise done');
    }, sec * 1000);
  });
}

async function sleepAsync(sec) {
  return resolve => {
    setTimeout(() => {
      console.log('tes');
      resolve('sleepAsync done');
    }, sec * 1000);
  };
}

async function test(index) {
  return index;
}

(async () => {
  const v1 = await sleepPromise(1);
  console.log(v1);
  const v2 = await sleepAsync(1);
  console.log(v2);
  console.log(await test(22));
})();
