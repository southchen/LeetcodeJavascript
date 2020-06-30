/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  let res = [];
  const traversal = (root) => {
    if (root) {
      traversal(root.left);
      traversal(root.right);
      res.push(root.val);
    }
  };
  traversal(root);
  return res;
};
/**
 *
 * 有left node，则move until null，再返回pre node
 * 当子节点都被遍历，再记录当前节点
 */
var postorderTraversal = function (root) {
  var result = [];
  var stack = [];
  var p = root;
  while (stack.length != 0 || p != null) {
    if (p != null) {
      stack.push(p);
      result.unshift(p.val); // Reverse the process of preorder
      p = p.right; // Reverse the process of preorder
    } else {
      var node = stack.pop();
      p = node.left; // Reverse the process of preorder
    }
  }
  return result;
};
var postorderTraversal = function (root) {
  // 1. Recursive solution

  // if (!root) return [];

  // return postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.val);

  // 2. iterative solutuon

  if (!root) return [];
  const ret = [];
  const stack = [root];
  let p = root; // 标识元素，用来判断节点是否应该出栈

  while (stack.length > 0) {
    const top = stack[stack.length - 1];
    if (
      top.left === p ||
      top.right === p || // 子节点已经遍历过了
      (top.left === null && top.right === null) // 叶子元素
    ) {
      p = stack.pop();
      ret.push(p.val);
    } else {
      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
    }
  }

  return ret;
};
// @lc code=end
