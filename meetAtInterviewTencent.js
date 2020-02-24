function test() {
  try {
    setTimeout(() => {
      throw 'error'
    })
  } catch (e) {
    console.log(e)
  }
}

test()
