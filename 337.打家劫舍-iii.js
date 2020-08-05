/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
//递归
// var rob = function(root) {
//     const traverse(node){
//         if(!node) return[0,0]
//       const left=traverse(node.left)
//       const right =traverse(node.right);
//       //抢 当前节点+前2个抢
//       let robed=node.val+left[1]+right[1]
//     //不抢 前一个状态的最大值，可抢也可不抢
//         let notRobed = Math.max(left[0],left[1])+Math.max(right[0],right[1])
//     }
//     let [robed,notRobed]=traverse(root)
//     return Math.max(robed,notRobed)
// };
//递归
// const rob = (root) => { // 打劫root为根节点的子树的最大收益
//     if (root == null) return 0;
//     let robIncludeRoot = root.val;
//     if (root.left) {
//       robIncludeRoot += rob(root.left.left) + rob(root.left.right);
//     }
//     if (root.right) {
//       robIncludeRoot += rob(root.right.left) + rob(root.right.right);
//     }
//     const robExcludeRoot = rob(root.left) + rob(root.right);
//     return Math.max(robIncludeRoot, robExcludeRoot); // 二者取其大
//   };

//DP
/**两个变量共同决定一个状态：1、代表不同子树的 root 节点、2、是否打劫了 root。
dp 不用数组，用map 代替。key是当前子树的root节点，value是存放两个状态的 res 数组。
没打劫根节点，则左右子树的根节点可打劫可不打劫：
res[0] = 左子树的两个状态的较大值 + 右子树的两个状态的较大值。
打劫了根节点，则左右子树的根节点不能打劫：
res[1] = root.val + 左子树的 [0] 状态 + 右子树的 [0] 状态。
**/
const rob = (root) => {
  const dp = new Map();
  const helper = (root) => {
    if (root == null) return [0, 0]; // 递归的出口
    const left = helper(root.left);
    const right = helper(root.right);
    if (!dp.has(root)) {
      // 还没遍历过该节点
      dp.set(root, [0, 0]); // 在map中添加该节点对应的res数组
    }
    const res = dp.get(root); // 获取该节点对应的res数组
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0]; // 在map中记录当前子树的两个状态
    return res; // 返回出这两个状态，供父节点参考
  };
  const res = helper(root); // 递归的入口
  return Math.max(res[0], res[1]);
};

// @lc code=end
