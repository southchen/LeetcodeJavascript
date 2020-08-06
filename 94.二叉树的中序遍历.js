/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
//递归
var inorderTraversal = function (root) {
  let res = [];
  const traversal = (root) => {
    if (root) {
      traversal(root.left);
      res.push(root.val);
      traversal(root.right);
    }
  };
  traversal(root);
  return res;
};
/**
 * cur node从root开始
 * 判断，left存在？存在则移动至left
 * right和left都没有，记录当前
 * left为null，有right，记录当前节点，移动至右节点
 * 向上返回时，让cur的left为null，标志已经记录过✨
 */
// var inorderTraversal = function (root) {
//   let res = [],
//     stack = [];
//   while (root) {
//     if (!root.left && !root.right) {
//       res.push(root.val);
//       root = stack.pop(); //获取到上一个节点！！
//       root && (root.left = null);//标记左子树已经被访问过
//     } else if (root.left) {
//       stack.push(root);
//       root = root.left;
//     } else if (root.right) {
//       res.push(root.val);
//       root = root.right;
//     }
//   }
//   return res;
// };

/**
 * 
 * 中序遍历的顺序为左-根-右，具体算法为：
从根节点开始，先将根节点压入栈
然后再将其所有左子结点压入栈，取出栈顶节点，保存节点值
再将当前指针移到其右子节点上，若存在右子节点，则在下次循环时又可将其所有左子结点压入栈中
 */
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   let stack = [root],
//     res = [],
//     cur = root;
//   while (stack.length > 0) {
//     while (cur.left) {
//       stack.push(cur.left);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     res.push(cur.val);
//     cur.left = null;
//     if (cur.right) {
//       stack.push(cur.right);
//       cur = cur.right;
//     }
//   }
//   return res;
// };
//✨不需要标记左子树已经访问过
var inorderTraversal = function (root) {
  var result = [];
  var stack = [];
  var p = root;
  while (stack.length != 0 || p != null) {
    if (p != null) {
      stack.push(p);
      p = p.left;
    } else {
      var node = stack.pop();
      result.push(node.val); // Add after all left children
      p = node.right;
    }
  }
  return result;
};
// @lc code=end
