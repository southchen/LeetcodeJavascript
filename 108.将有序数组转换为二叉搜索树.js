/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function (nums) {
//
//   if (nums.length <= 0) return null;
//   let mid = Math.floor(nums.length / 2);
//   let root = new TreeNode(nums[mid]);
//   root.left = sortedArrayToBST(nums.slice(0), mid);
//   root.right = sortedArrayToBST(nums.slice(mid + 1));
//   return root;
// };
var sortedArrayToBST = function (nums) {
  //return null;
  //    important not return;
  if (nums.length <= 0) return null;
  let mid = Math.floor(nums.length / 2);
  let cur = new TreeNode(nums[mid]);

  cur.left = sortedArrayToBST(nums.slice(0, mid));
  cur.right = sortedArrayToBST(nums.slice(mid + 1));

  return cur;
};
// @lc code=end
