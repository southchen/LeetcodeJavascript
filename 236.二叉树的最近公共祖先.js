/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * 
 *从左右子树分别进行递归，即查找左右子树上是否有p节点或者q节点
左右子树均无p节点或q节点
左子树找到，右子树没有找到，返回左子树的查找结果
右子树找到，左子树没有找到，返回右子树的查找结果
左、右子树均能找到:说明此时的p节点和q节点在当前root节点两侧，返回root节点
 */
var lowestCommonAncestor = function (root, p, q) {
  // 遇到null节点返回null，遇到p或q，返回p或q
  if (root == null || root == p || root == q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left ? left : right;
};

// var lowestCommonAncestor = function (root, p, q) {
//   let ans;
//   const dfs = (root, p, q) => {
//     if (root === null) return false;
//     const lson = dfs(root.left, p, q);
//     const rson = dfs(root.right, p, q);
//     if (
//       (lson && rson) ||
//       ((root.val === p.val || root.val === q.val) && (lson || rson))
//     ) {
//       ans = root;
//     }
//     return lson || rson || root.val === p.val || root.val === q.val;
//   };
//   dfs(root, p, q);
//   return ans;
// };

// @lc code=end
