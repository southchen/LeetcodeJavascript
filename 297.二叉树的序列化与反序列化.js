/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  if (!root) {
    return 'null';
  }
  let left = serialize(root.left);
  let right = serialize(root.right);
  return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = JSON.parse('[' + data + ']');

  const buildTree = (arr) => {
    let cur = arr.shift();
    if (cur === null) {
      return null;
    }
    let node = new TreeNode(cur);

    node.left = buildTree(arr);

    node.right = buildTree(arr);
    return node;
  };

  return buildTree(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
