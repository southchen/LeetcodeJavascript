/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
//116，117两题通解
//利用一个栈将下一层的节点保存。通过pre指针把栈里的元素一个一个接起来。

//
// var connect = function (root) {
//   let cur = root;
//   while (cur !== null) {
//     let pre = new Node();
//     let node = pre;
//     while (cur !== null) {
//       if (cur.left !== null) {
//         node.next = cur.left;
//         node = node.next;
//       }
//       if (cur.right !== null) {
//         node.next = cur.right;
//         node = node.next;
//       }
//       cur = cur.next;
//     }
//     cur = pre.next;
//   }
//   return root;
// };

var connect = function (root) {
  if (root === null) return null;

  if (root.left !== null) {
    if (root.right !== null) {
      root.left.next = root.right;
    } else {
      root.left.next = help(root);
    }
  }

  if (root.right !== null) {
    root.right.next = help(root);
  }

  // 递归顺序，必须先右后左
  // 确保每一层从左向右扫描时能够扫描到
  connect(root.right);
  connect(root.left);

  return root;
};

// 寻找可以root下可以连接的下一个节点
function help(root) {
  // root下已经没有可以连接的子节点，将root设置为root.next
  root = root.next;
  while (root) {
    if (root.left !== null) return root.left;
    if (root.right !== null) return root.right;
    root = root.next;
  }
  return null;
}
var connect = function (root) {
  if (root == null) return null;
  var queue = [root];
  while (queue.length > 0) {
    var len = queue.length;
    for (let i = 0; i < len; i++) {
      var node = queue.shift();
      if (i == len - 1) {
        node.next = null;
      } else {
        node.next = queue[0];
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
  }
  return root;
};

// @lc code=end
