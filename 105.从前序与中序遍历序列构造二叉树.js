/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//分治
/**
 * 从前序找到当前root => new TreeNode
 * 在中序中根据root，找到中心点索引，划分左右两边
 * 在前序根据中心点索引划分两边
 * root.left是左边的下一个root
 * root.right是右边的下一个root
 * 子问题，相当于把已经确定的node去掉，再次调用
 * 可以递归实现
 * */

var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  let curRoot = preorder[0];
  let mid = inorder.indexOf(curRoot);
  let root = new TreeNode(curRoot);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
// @lc code=end
