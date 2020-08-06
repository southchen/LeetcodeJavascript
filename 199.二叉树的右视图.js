/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
// var rightSideView = function (root) {
//   if (!root) return [];
//   let queue = [root];
//   let res = [];
//   while (queue.length > 0) {
//     let len = queue.length;

//     for (let i = 0; i < len; i++) {
//       let cur = queue.shift();
//       cur.left && queue.push(cur.left);
//       cur.right && queue.push(cur.right);
//       if (i == len - 1) {
//         res.push(cur.val);
//         break;
//       }
//     }
//   }
//   return res;
// };
//递归DFS
var rightSideView = function (root) {
  if (!root) return [];
  let arr = [];
  dfs(root, 0, arr);
  return arr;
};
function dfs(root, step, res) {
  if (root) {
    if (res.length === step) {
      res.push(root.val); // 当数组长度等于当前 深度 时, 把当前的值加入数组
    }
    dfs(root.right, step + 1, res); // 先从右边开始, 当右边没了, 再轮到左边
    dfs(root.left, step + 1, res);
  }
}
// @lc code=end
