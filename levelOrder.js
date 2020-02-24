// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  treeIterator(root, res, 0);
  return res;
};

/**
 * @param {TreeNode} tree
 * @param {number[][]} res
 * @param {number} level
 */
var treeIterator = function(tree, res, level) {
  if (!tree) {
    return;
  }
  if (!res[level]) {
    res[level] = [];
  }
  res[level].push(tree.val);
  treeIterator(tree.left, res, level + 1);
  treeIterator(tree.right, res, level + 1);
};
