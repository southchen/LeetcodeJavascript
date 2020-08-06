/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
//递归DFS
//1.左右子树的root值相等
//2.左右子树镜像相等
//边界条件 左右子树都null，true
//左右子树有一个null，false
var isSymmetric = function (root) {
  const symmetric = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      symmetric(left.left, right.right) &&
      symmetric(right.left, left.right)
    );
  };
  return symmetric(root, root);
};
//迭代
var isSymmetric = function (root) {
  if (!root) return true;
  let stack = [root.left, root.right];
  while (stack.length > 0) {
    let right = stack.pop();
    left = stack.pop();
    if (left && right) {
      if (left.val !== right.val) return false;
      stack.push(left.left, right.right);
      stack.push(left.right, right.left);
    } else if (left || right) {
      return false;
    }
  }
  return true;
};
//BFS
/**
 * 入 queue 的顺序：
左子树的左子树，右子树的右子树
左子树的右子树，右子树的左子树。
出 queue 的时候，检查两两是否对称
 */
var isSymmetric = (root) => {
  if (!root) return true;
  let queue = [root.left, root.right];
  while (queue.length) {
    // 队列为空代表没有可入列的节点，遍历结束
    let len = queue.length; // 获取当前层的节点数
    for (let i = 0; i < len; i += 2) {
      // 一次循环出列两个，所以每次+2
      let left = queue.shift(); // 左右子树分别出列
      let right = queue.shift(); // 分别赋给left和right变量
      if ((left && !right) || (!left && right)) return false; // 不满足对称
      if (left && right) {
        // 左右子树都存在
        if (left.val !== right.val) return false; // 左右子树的根节点值不同
        queue.push(left.left, right.right); // 让左子树的left和右子树的right入列
        queue.push(left.right, right.left); // 让左子树的right和右子树的left入列
      }
    }
  }
  return true; // 循环结束也没有遇到返回false
};

// @lc code=end
