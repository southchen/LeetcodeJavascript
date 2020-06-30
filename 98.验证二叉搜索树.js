/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
//一个结点若是在根的左子树上，那它应该小于根结点的值而大于左子树最小值；
//若是在根的右子树上，那它应该大于根结点的值而小于右子树最大值。
// var isValidBST = function (root) {
//   let pre = -Infinity;
//   function recursion(root) {
//     if (!root) return true;
//     if (!recursion(root.left)) return false;
//     if (root.val <= pre) return false;
//     pre = root.val;
//     //console.log(root.val, pre);
//     return recursion(root.right);
//   }
//   return recursion(root);
// };
//迭代，中序遍历pre<cur
var isValidBST = function (root) {
  let pre = -Infinity;
  let stack = [];
  let p = root;
  while (stack.length || p) {
    if (p) {
      stack.push(p);
      p = p.left;
    } else {
      p = stack.pop();

      if (p <= pre) return false;

      pre = p.val;
      p = p.right;
    }
  }
  return true;
};
// @lc code=end
