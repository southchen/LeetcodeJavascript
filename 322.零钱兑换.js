/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/**
 * 用dp[i] 来表示组成i块钱，需要最少的硬币数，那么

第j个硬币我可以选择不拿 这个时候， 硬币数 = dp[i]

第j个硬币我可以选择拿 这个时候， 硬币数 = dp[i - coins[j]] + 1

和背包问题不同， 硬币是可以拿任意个

对于每一个 dp[i] 我们都选择遍历一遍 coin， 不断更新 dp[i]
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        //不选当前coin，不变，dp[i],选择当前,等于没选该币的个数+1,：dp[i-coin]+1
        //遍历币种，留下最小值
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// @lc code=end
