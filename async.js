function promise1(val) {
  return new Promise((resolve, reject) => {
    if (Number(val)) {
      resolve(val)
    } else {
      reject(`${val} is not number`)
    }
  })
}

function promise2(val, val2) {
  return new Promise(resolve => {
    resolve(`${val} is from promise1, ${val2} is from promise3`)
  })
}

function promise3(val) {
  return new Promise(resolve => {
    resolve(val + '3')
  })
}

async function test(val) {
  try {
    const [v1, v3] = await Promise.all([promise1(val), promise3(val)])
    const msg = await promise2(v1, v3)
    console.log(msg)
  } catch (e) {
    console.log(e)
  }
}

test(122)
test('4545')
// test('122*')
