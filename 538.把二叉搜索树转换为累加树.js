/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
//right->root->left
var convertBST = function (root) {
  if (!root) return null;
  let n = 0,
    stack = [],
    cur = root;
  while (stack.length > 0 || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.right;
    } else {
      let node = stack.pop();
      n += node.val;
      node.val = n;
      cur = node.left;
    }
  }
  return root;
};
// @lc code=end
