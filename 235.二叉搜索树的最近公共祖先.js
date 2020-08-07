/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
// const lowestCommonAncestor = (root, p, q) => {
//   if (p.val < root.val && q.val < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   if (p.val > root.val && q.val > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   return root;
// };
//
const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};

// @lc code=end
