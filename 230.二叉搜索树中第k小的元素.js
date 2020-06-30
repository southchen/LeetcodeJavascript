/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (root, k) {
//   let stack = [];
//   let p = root;
//   while (stack.length > 0 || p != null) {
//     if (p != null) {
//       stack.push(p);
//       p = p.left;
//     } else {
//       p = stack.pop();
//       if (--k === 0) return p.val;
//       p = p.right;
//     }
//   }
// };
//联想到二叉搜索树的性质，root 大于左子树，小于右子树，如果左子树的节点数目等于 K-1，那么 root 就是结果，否则如果左子树节点数目小于 K-1，那么结果必然在右子树，否则就在左子树。 因此在搜索的时候同时返回节点数目，跟 K 做对比，就能得出结果了。
var kthSmallest = function (root, k) {
  function nodeCount(node) {
    if (node === null) return 0;

    const l = nodeCount(node.left);
    const r = nodeCount(node.right);

    return 1 + l + r;
  }
  const c = nodeCount(root.left);
  if (c === k - 1) return root.val;
  else if (c < k - 1) return kthSmallest(root.right, k - c - 1);
  return kthSmallest(root.left, k);
};
// @lc code=end
