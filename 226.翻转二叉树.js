/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
//递归
// var invertTree = function (root) {
//   if (root == null) return null;
//   [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];

//   return root;
// };
// //迭代
// var invertTree = function (root) {
//   if (!root) return null;
//   let arr = [root];
//   while (arr.length > 0) {
//     let node = arr.shift();
//     if (node === null) continue;
//     arr.push(node.left, node.right);
//     [node.left, node.right] = [node.right, node.left];
//   }
//   return root;
// };
var invertTree = function (root) {
  if (!root) return null;
  let stack = [root],
    cur;
  while (stack.length > 0 || cur) {
    cur = stack.pop();
    if (cur) {
      if (cur.left || cur.right) {
        [cur.left, cur.right] = [cur.right, cur.left];
        stack.push(cur.left, cur.right);
      }
    }
  }
  return root;
};
// @lc code=end
