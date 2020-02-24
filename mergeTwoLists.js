/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  const res = new ListNode();
  let tmp = res;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        tmp.val = l1.val;
        l1 = l1.next;
      } else {
        tmp.val = l2.val;
        l2 = l2.next;
      }
    } else if (l1 && !l2) {
      tmp.val = l1.val;
      l1 = l1.next;
    } else {
      tmp.val = l2.val;
      l2 = l2.next;
    }
    if (l1 || l2) {
      tmp.next = new ListNode();
      tmp = tmp.next;
    }
  }
  return res;
}
