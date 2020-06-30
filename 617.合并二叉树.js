/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
//递归
// var mergeTrees = function (t1, t2) {
//   if (t1 === null) {
//     return t2;
//   } else if (t2 === null) {
//     return t1;
//   } else {
//     t1.val = t1.val + t2.val;
//     t1.left = mergeTrees(t1.left, t2.left);
//     t1.right = mergeTrees(t1.right, t2.right);

//     return t1;
//   }
// };
//迭代
var mergeTrees = function (t1, t2) {
  if (!t1 || !t2) return t1 || t2;
  let res = [[t1, t2]];
  while (res.length > 0) {
    let cur = res.pop();
    let [t1, t2] = cur;
    t1.val += t2.val;
    if (t1.left && t2.left) res.push([t1.left, t2.left]);
    if (t1.right && t2.right) res.push([t1.right, t2.right]);
    if (!t1.left && t2.left) t1.left = t2.left;
    if (!t1.right && t2.right) t1.right = t2.right;
  }
  return t1;
};
// var mergeTrees = function (t1, t2) {
//   if (!t1 || !t2) return t1 || t2;
//   const res = [[t1, t2]];
//   while (res.length) {
//     const t = res.pop();
//     t[0].val += t[1].val;
//     if (t[0].left && t[1].left) {
//       res.push([t[0].left, t[1].left]);
//     }
//     if (t[0].right && t[1].right) {
//       res.push([t[0].right, t[1].right]);
//     }
//     if (!t[0].left && t[1].left) {
//       t[0].left = t[1].left;
//     }
//     if (!t[0].right && t[1].right) {
//       t[0].right = t[1].right;
//     }
//   }
//   return t1;
// };

// @lc code=end
