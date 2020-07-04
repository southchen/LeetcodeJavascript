/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
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
var minDepth = function (root) {
  let min;
  const recursion = (node) => {
    if (!node) return 0;

    let left = recursion(node.left);
    let right = recursion(node.right);
    if (left == 0 && right == 0) return 1;
    if (left == 0 || right == 0) return left + right + 1;
    return Math.min(left, right) + 1;
  };
  return recursion(root);
};
// @lc code=end
