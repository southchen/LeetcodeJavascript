/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (!root) return 0;
  let arr = [root, 's'],
    count = 0;
  while (arr.length > 0) {
    let node = arr.shift();
    if (node === null) continue;
    if (node === 's') {
      if (arr.length === 0) {
        return count;
      } else {
        count++;
        arr.push('s');
      }
    } else {
      arr.push(node.left, node.right);
    }
  }
  return count;
};
/**
 * 标签：DFS
找出终止条件：当前节点为空
找出返回值：节点为空时说明高度为0，所以返回0；节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值
某层的执行过程：在返回值部分基本已经描述清楚
时间复杂度：O(n)
 */
// var maxDepth = function(root) {
// if(!root) {
//     return 0;
// } else {
//     const left = maxDepth(root.left);
//     const right = maxDepth(root.right);
//     return Math.max(left, right) + 1;
// }
// };
/**
 * 不断边压栈边出栈
先两边边开始分别都压一个
并先返回一边 剩下的出栈就都是另一边 即一次只出栈一个节点即可实现
每次出栈取高度的最大值，初始化root根节点高度为1 就不用再加1了
返回更新的高度最终确定比较值
 */
var maxDepth = function (root) {
  var tmpStack = [{ key: root, val: 1 }];
  var depth = 0;
  while (tmpStack.length != 0) {
    var currObj = tmpStack.pop();
    var currNode = currObj.key;
    if (currNode != null) {
      var currNode_depth = currObj.val;
      depth = Math.max(depth, currNode_depth);
      if (currNode.left != null) {
        tmpStack.push({ key: currNode.left, val: currNode_depth + 1 });
      }
      if (currNode.right != null) {
        tmpStack.push({ key: currNode.right, val: currNode_depth + 1 });
      }
    }
  }
  return depth;
};
// 迭代
var maxDepth = function (root) {
  if (!root) return 0;
  var queue = [[root, 1]];
  var maxD = 1;
  while (queue.length) {
    var [p, d] = queue.shift();
    p.left && queue.push([p.left, d + 1]);
    p.right && queue.push([p.right, d + 1]);
    maxD = Math.max(maxD, d);
  }
  return maxD;
};

// @lc code=end
