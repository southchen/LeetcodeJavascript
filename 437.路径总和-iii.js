/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
/**
 * 需要注意的是路径不需要从根节点开始，
 * 也不需要再叶子节点结束，所以需要把树的左边和右边拆出来计算数的左边和右边是否满足
 */
var pathSum = function (root, sum) {
  if (!root) return 0;
  let res = countPath(root, sum);
  let L = pathSum(root.left, sum);
  let R = pathSum(root.right, sum);
  return res + L + R;
};
const countPath = function (root, sum) {
  if (!root) return 0;
  sum -= root.val;
  let count = sum === 0 ? 1 : 0;
  return count + countPath(root.left, sum) + countPath(root.right, sum);
};
//
var pathSum = function (root, sum) {
  let count = 0;
  const findRoute = (current, currentSum) => {
    if (!current) {
      return;
    }
    if (!current.isVisted) {
      current.isVisted = true;
      current.left && findRoute(current.left, 0);
      current.right && findRoute(current.right, 0);
    }
    let val = currentSum + current.val;
    if (currentSum + current.val === sum) {
      count++;
    }
    current.left && findRoute(current.left, val);
    current.right && findRoute(current.right, val);
  };
  findRoute(root, 0);
  return count;
};
// @lc code=end
