function flat(array) {
  const res = []
  while (array.length) {
    const item = array.shift()
    if (Array.isArray(item)) {
      res.push(...flat(item))
    } else {
      res.push(item)
    }
  }
  return res
}

function flatIteration(array) {
  let res = []
  while (array.length) {
    const item = array.shift()
    if (Array.isArray(item)) {
      array.unshift(...item)
    } else {
      res.push(item)
    }
  }
  return res
}

console.log(flat([1, { a: '2' }, [3, [4, [5]]]]))
console.log(flatIteration([1, { a: '2' }, [3, [4, [5]]]]))
