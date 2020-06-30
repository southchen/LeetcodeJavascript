/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
 * @return {number}
 */
/****
 * 其实二叉树递归的难点就在于怎么构思：子节点向父节点返回的是什么?或者说，当前节点向其父节点返回的是什么?
 * 这题中，当前节点返回给父节点的值就是： 从当前节点出发，向下延伸与其值相同的最大深度 于是返回值分两种情况：
 * 1.if( 如果当前节点与其左右节点都不相等)，那么深度为0，则返回0
 * 2. else，这个最大深度就取其 左右子树返回值中的较大者 + 1
 * 然后，在上面这个dfs的遍历过程中，还可以做一些其他的事情，这题做的就是 计算路径长度。由于子树的返回值已经确定了，所以需要额外的一个全局变量。
 * 如何计算路径长度呢？其实知道了和自己数值相等的左右子树的最大高度了，那么 把左右子树返回的值相加 就是贯穿自己的最长路径了。
 */
var longestUnivaluePath = function (root) {
  let res = 0;
  const recursion = (root) => {
    if (!root) return 0;
    const left = recursion(root.left);
    const right = recursion(root.right);
    let leftLen = 0,
      rightLen = 0;
    if (root.left && root.left.val === root.val) {
      leftLen = left++;
    } else if (root.right.val === root.val) {
      rightLen = right++;
    } else {
      longestUnivaluePath(root.left);
    }
  };
};

var longestUnivaluePath = function (root) {
  let max = 0;

  let iterator = (node, val) => {
    if (node === null) {
      return 0;
    }

    let leftLen = iterator(node.left, node.val);
    let rightLen = iterator(node.right, node.val);
    let len = leftLen + rightLen;

    len > max && (max = len);

    if (node.val === val) {
      return Math.max(leftLen, rightLen) + 1;
    } else {
      return 0;
    }
  };

  iterator(root, undefined);

  return max;
};
// @lc code=end
