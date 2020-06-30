/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
//二叉树的中序遍历即为从小到大的排序序列
var minDiffInBST = function (root) {
  let res = [];
  const traversal = (root) => {
    if (!root) return;
    traversal(root.left);
    res.push(root.val);
    traversal(root.right);
  };
  traversal(root);

  let min = Infinity;
  res.reduce((cur, next) => {
    min = Math.min(min, next - cur);
    return next;
  });
  return min;
};

// @lc code=end
