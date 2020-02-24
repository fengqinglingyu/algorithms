class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const res = new ListNode();
  let tmp = res;
  let carry = 0;
  while (l1 || l2) {
    let value = 0;
    if (l1 && l2) {
      value += l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 && !l2) {
      value += l1.val + carry;
      l1 = l1.next;
    } else {
      value += l2.val + carry;
      l2 = l2.next;
    }
    carry = Math.floor(value / 10);
    tmp.val = value % 10;
    if (l1 || l2) {
      tmp.next = new ListNode();
      tmp = tmp.next;
    } else {
      if (carry) {
        tmp.next = new ListNode(1);
      }
    }
  }
  return res;
}
