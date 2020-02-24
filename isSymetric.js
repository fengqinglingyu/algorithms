/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return check(root.left, root.right);
};

/**
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var check = function(p, q) {
  if (!q && !p) return true;
  if (!q || !p) return false;
  if (q.val !== p.val) return false;
  return check(p.right, q.left) && check(p.left, q.right);
};
