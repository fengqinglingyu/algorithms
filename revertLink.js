/**
 *
 * @param {any[]} args
 */
function createLink(args) {
  const lastIndex = args.length - 1;
  const res = { value: '', next: null };
  let tmp = res;
  args.forEach((i, idx) => {
    if (idx !== lastIndex) {
      tmp.value = i;
      tmp.next = { value: '', next: null };
      tmp = tmp.next;
    } else {
      tmp.value = i;
    }
  });
  return res;
}

function revertLink(link, k) {
  const stack = [];
  let poiter = link;
  let res = null;
  let resPoiter = null;
  while (poiter) {
    const copy = poiter;
    poiter = poiter.next;
    copy.next = null;
    stack.push(copy);
    if (stack.length === k) {
      while (stack.length) {
        const item = stack.pop();
        if (!res) {
          res = item;
          resPoiter = item;
        } else {
          resPoiter.next = item;
          resPoiter = resPoiter.next;
        }
      }
    }
  }
  while (stack.length) {
    const item = stack.shift();
    if (!res) {
      res = item;
      resPoiter = item;
    } else {
      resPoiter.next = item;
      resPoiter = resPoiter.next;
    }
  }
  return res;
}

revertLink(createLink([1, 2, 3, 4, 5, 6, 7, 8, 9, 110]), 3);
