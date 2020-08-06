/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
//BFS
var largestValues = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;

    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      max = Math.max(max, cur.val);
    }
    res.push(max);
  }
  return res;
};
//DFS
var largestValues = function (root) {
  if (!root || root.length == 0) {
    return [];
  }
  var result = [];
  function dfs(currNode, level) {
    if (currNode != null) {
      if (result[level] == undefined) {
        result[level] = currNode.val;
      } else {
        result[level] = Math.max(currNode.val, result[level]);
      }
      currNode.left && dfs(currNode.left, level + 1);

      currNode.right != null && dfs(currNode.right, level + 1);
    }
  }
  dfs(root, 0);
  return result;
};

// @lc code=end
