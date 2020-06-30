/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/**
 * 
首先在后序遍历序列中找到根节点(最后一个元素)
根据根节点在中序遍历序列中找到根节点的位置
根据根节点的位置将中序遍历序列分为左子树和右子树
根据根节点的位置确定左子树和右子树在中序数组和后续数组中的左右边界位置
递归构造左子树和右子树
返回根节点结束
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length <= 0) return null;
  let length = inorder.length;
  let curRoot = postorder[length - 1];
  let mid = inorder.indexOf(curRoot);
  let root = new TreeNode(curRoot);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(
    inorder.slice(mid + 1),
    postorder.slice(mid, length - 1)
  );
  return root;
};
/**
 * 使用哈希将中序遍历的值映射到索引上
根据找打的根节点将中序遍历的结果分成左右两棵树
根据后序遍历的结果映射左子树、右子树、根节点，注意，中序遍历中左子树根节点的位置在后序遍历结果的(当前根节点的索引-右子树的个数-1)
 */
var buildTree = function (inorder, postorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const dfs = (pre, left, right) => {
    if (left > right) return null;
    let root = new TreeNode(postorder[pre]);
    let i = map.get(postorder[pre]);
    // pre - (right - i) - 1 左子树根节点所在位置
    root.left = dfs(pre - (right - i) - 1, left, i - 1);
    root.right = dfs(pre - 1, i + 1, right);
    return root;
  };
  return dfs(postorder.length - 1, 0, postorder.length - 1);
};

// @lc code=end
