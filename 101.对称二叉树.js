/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
//递归DFS
//1.左右子树的root值相等
//2.左右子树镜像相等
//边界条件 左右子树都null，true
//左右子树有一个null，false
// var isSymmetric = function (root) {
//   const symmetric = (left, right) => {
//     if (!left && !right) return true;
//     if (!left || !right) return false;
//     return (
//       left.val === right.val &&
//       symmetric(left.left, right.right) &&
//       symmetric(right.left, left.right)
//     );
//   };
//   return symmetric(root, root);
// };
//迭代
var isSymmetric = function (root) {
  if (!root) return true;
  let stack = [root.left, root.right];
  while (stack.length > 0) {
    let right = stack.pop();
    left = stack.pop();
    if (left && right) {
      if (left.val !== right.val) return false;
      stack.push(left.left, right.right);
      stack.push(left.right, right.left);
    } else if (left || right) {
      return false;
    }
  }
  return true;
};
// @lc code=end
