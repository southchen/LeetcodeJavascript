/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 标签：动态规划
 * 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
 * 爬上 n-1阶楼梯的方法数量。因为再爬1阶就能到第n阶
 * 爬上 n-2阶楼梯的方法数量，因为再爬2阶就能到第n阶
 * * */
var climbStairs = function (n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end
