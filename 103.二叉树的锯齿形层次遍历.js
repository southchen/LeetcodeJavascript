/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let level = 0;
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      if (level % 2 != 0) {
        let cur = queue.shift();
        cur.right && queue.push(cur.right);
        cur.left && queue.push(cur.left);

        arr.push(cur.val);
      } else {
        let cur = queue.pop();
        cur.left && queue.unshift(cur.left);
        cur.right && queue.unshift(cur.right);

        arr.push(cur.val);
      }
    }
    level++;
    res.push(arr);
  }
  return res;
};
//[1,2,3,4,null,null,5]
// @lc code=end
