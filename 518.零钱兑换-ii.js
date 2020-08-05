/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//零钱兑换I和II都可以定义一阶dp和二阶dp，零钱兑换I因为是求最小值，排列和组合结果一样，而零钱兑换II排列结果会大于组合
var change = function (amount, coins) {
  if (amount === 0) return 1;

  const dp = [Array(amount + 1).fill(1)];

  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Array(coins.length + 1).fill(0);
    for (let j = 1; j < coins.length + 1; j++) {
      // 从1开始可以简化运算
      if (i - coins[j - 1] >= 0) {
        // 注意这里是coins[j -1]而不是coins[j]
        dp[i][j] = dp[i][j - 1] + dp[i - coins[j - 1]][j]; // 由于可以重复使用硬币所以这里是j不是j-1
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[dp.length - 1][coins.length];
};

var change = function (amount, coins) {
  if (amount === 0) return 1;

  const dp = [1].concat(Array(amount).fill(0));

  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i < amount + 1; i++) {
      if (i - coins[j] >= 0) {
        dp[i] = dp[i] + dp[i - coins[j]];
      }
    }
  }

  return dp[dp.length - 1];
};

// @lc code=end
