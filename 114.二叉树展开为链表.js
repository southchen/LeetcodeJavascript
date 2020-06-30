/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/**
 * root->left->right
 */
//递归1
//前序遍历存在res array内
//再把res中每个元素进行处理
// var flatten = function (root) {
//   let res = [];
//   const recursion = (cur) => {
//     if (!cur) return;
//     res.push(cur);
//     recursion(cur.left);
//     recursion(cur.right);
//   };
//   recursion(root);
//   if (res.length === 0) return;
//   res.reduce((cur, next) => {
//     cur.left = null;
//     cur.right = next;
//     return next;
//   });
// };

//递归2
/**
 * 如果按先遍历 right 再遍历 left 生成的「后序遍历」，我们会发现这和 前序遍历 的结果刚好相反。
 * 利用这个特点，我们可以在 O(1)的空间复杂度内解决这道题。
 */
// var flatten = function (root) {
//   let prev = null;
//   const recursion = (cur) => {
//     if (!cur) return;
//     recursion(cur.right);
//     recursion(cur.left);
//     cur.right = prev;
//     cur.left = null;
//     prev = cur;
//   };
//   recursion(root);
// };
/**
 * 我们知道题目给定的遍历顺序其实就是先序遍历的顺序，所以我们能不能利用先序遍历的代码，每遍历一个节点，就将上一个节点的右指针更新为当前节点。
先序遍历的顺序是 1 2 3 4 5 6。
遍历到 2，把 1 的右指针指向 2。1 -> 2 3 4 5 6。
遍历到 3，把 2 的右指针指向 3。1 -> 2 -> 3 4 5 6。
一直进行下去似乎就解决了这个问题。但现实是残酷的，原因就是我们把 1 的右指针指向 2，那么 1 的原本的右孩子就丢失了，也就是 5 就找不到了。
解决方法的话，我们可以逆过来进行。
我们依次遍历 6 5 4 3 2 1，然后每遍历一个节点就将当前节点的右指针更新为上一个节点。
遍历到 5，把 5 的右指针指向 6。6 <- 5 4 3 2 1。
遍历到 4，把 4 的右指针指向 5。6 <- 5 <- 4 3 2 1。
这样就不会有丢失孩子的问题了，因为更新当前的右指针的时候，当前节点的右孩子已经访问过了。
而 6 5 4 3 2 1 的遍历顺序其实变形的后序遍历，遍历顺序是右子树->左子树->根节点。
这里的话，我们不再是打印根节点，而是利用一个全局变量 pre，更新当前根节点的右指针为 pre，左指针为 null。
相应的左孩子也要置为 null，同样的也不用担心左孩子丢失，因为是后序遍历，左孩子已经遍历过了。和 112 题一样，都巧妙的利用了后序遍历。
 */

//迭代
//use stack to store the right node of the cur node
var flatten = function (root) {
  if (!root) return null;
  const stack = [];
  while (root.left || root.right || stack.length > 0) {
    if (root.right) stack.push(root.right);
    if (root.left) {
      root.right = root.left;
      root.left = null;
    } else {
      root.right = stack.pop();
    }
    root = root.right;
  }
};

/**
 * 找到左节点的最右节点
将树的右节点接在左节点的最右节点上
右节点替换为左节点
左节点的值置为null
一直循环到树的末尾
题目其实是将二叉树的右指针、组成一个链表
 */
// var flatten = function (root) {
//   while (root) {
//     if (!root.left) {
//       root = root.right;
//     } else {
//       let temp = root.left;
//       // 找到左节点的最右树节点
//       while (temp.right) temp = temp.right;
//       // 将树的右节点接在左节点的最右树节点上
//       temp.right = root.right;
//       // 右节点替换为左节点
//       root.right = root.left;
//       // 左节点的值置为null
//       root.left = null;
//       // 开始下一次遍历
//       root = root.right;
//     }
//   }
// };
// @lc code=end
