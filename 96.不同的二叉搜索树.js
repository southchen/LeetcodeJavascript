/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//dp
/**
 * 
子树得个数与子树内容无关，只与子树包含的元素个数有关
数组长为i, 0 < j < i
则sum[j] = dp[j-1] * dp[i-j] (左边子树有dp[i-1]个状态，右边子树有dp[n-i]个状态，所以以 i 为根，一共有 乘积个状态)
又有
dp[n] = 所有小于 n 得点作为根节点，所能构造得二叉搜索树之和，
所以
dp[i] = sum[0]+sum[1]+sum[2]+sum[3]+...sum[i]
 */
var numTrees = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
};
/**
 * 思路：1..n的二叉搜索树数量 = 1为根节点的1..n的二叉搜索数量 + 2为根节点 + 3为根节点 + 4 ... n
 * 而 1为根节点1..n的二叉搜索树数量 = 1 * n - 1个元素的数量
 * 2为根节点1..n的二叉搜索树数量 = 左边1个元素的数量 * 右边n - 2个元素数量
 * 3为根节点1..n数量 = 左边2元素数量 * 右边 n - 3数量
 * 4为根 = 左3数量 * 右n-4数量
 * 可以递归
 *
 */
// let results = [];
// var numTrees = function (n) {
//   if (n === 1 || n === 0) return 1;
//   if (results[n]) {
//     return results[n];
//   }

//   let res = 0;
//   //1 .. n个根相加
//   for (let i = 1; i <= n; i++) {
//     res += numTrees(i - 1) * numTrees(n - i);
//   }
//   results[n] = res;

//   return res;
// };

// @lc code=end
