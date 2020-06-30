/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
//递归
// var preorderTraversal = function (root) {
//   let res = [];
//   const traversal = (root) => {
//     if (root) {
//       res.push(root.val);
//       traversal(root.left);
//       traversal(root.right);
//     }
//   };
//   traversal(root);
//   return res;
// };
/**
 * 
 * 把根节点 push 到栈中
循环检测栈是否为空，若不空，则取出栈顶元素，保存其值
看其右子节点是否存在，若存在则 push 到栈中
看其左子节点，若存在，则 push 到栈中。
 */
// var preorderTraversal = function (root) {
//   if (!root) return [];
//   let res = [],
//     stack = [root];
//   while (stack.length > 0) {
//     let cur = stack.pop();
//     res.push(cur.val);
//     if (cur.right) stack.push(cur.right);
//     if (cur.left) stack.push(cur.left);
//   }
//   return res;
// };
//version2
// var preorderTraversal = function (root) {
//   let res = [],
//     stack = [],
//     cur = root;
//   while (stack.length > 0 || cur) {
//     if (cur) {
//       stack.push(cur);
//       res.push(cur.val);
//       cur = cur.left;
//     } else {
//       let node = stack.pop();
//       cur = node.right;
//     }
//   }
//   return res;
// };
// @lc code=end
