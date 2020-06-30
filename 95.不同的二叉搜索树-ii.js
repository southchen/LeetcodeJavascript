/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function buildTree(start, end) {
    let ans = [];
    if (start > end) return [null];
    for (let i = start; i <= end; i++) {
      let leftNodes = buildTree(start, i - 1);
      let rightNodes = buildTree(i + 1, end);
      for (const leftNode of leftNodes) {
        for (const rightNode of rightNodes) {
          let cur = new TreeNode(i);
          cur.left = leftNode;
          cur.right = rightNode;
          ans.push(cur);
        }
      }
    }
    return ans;
  }
  if (n === 0) return [];
  return buildTree(1, n);
};

// @lc code=end
