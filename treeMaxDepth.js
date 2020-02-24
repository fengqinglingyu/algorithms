/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const levels = [];
  calDepth(root, 0, levels);
  return Math.max(...levels);
};
/**
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number} levels
 * @return {number}
 */
var calDepth = function(tree, depth, levels) {
  if (tree.val) {
    depth += 1;
  }
  levels.push(depth);
  if (tree.left) {
    calDepth(tree.left, depth, levels);
  }
  if (tree.right) {
    calDepth(tree.right, depth, levels);
  }
};

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const depth = node => {
    return node === null
      ? 0
      : Math.max(depth(node.left), depth(node.right)) + 1;
  };
  return depth(root);
};
