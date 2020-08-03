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
 * 为什么说它符合最优子结构呢?
 * 比如你想求 amount =11 时的最少硬币数(原问题)，
 * 如果你知道凑出 amount = 10 的最少硬币 数(子问题)，你只需要把子问题的答案加一(再选一枚面值为 1 的硬币) 就是原问题的答案，
 * 因为硬币的数量是没有限制的，子问题之间没有相互 制，是互相独立的。
 * 用dp[i] 来表示组成i块钱，需要最少的硬币数，那么第j个硬币我可以选择不拿 这个时候， 硬币数 = dp[i]
 * 第j个硬币我可以选择拿 这个时候， 硬币数 = dp[i - coins[j]] + 1
 * 和背包问题不同， 硬币是可以拿任意个
 * 对于每一个 dp[i] 我们都选择遍历一遍 coin， 不断更新 dp[i]
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        //不选当前coin，不变，dp[i],选择当前,等于没选该币的个数+1=>dp[i-coin]+1
        //遍历币种，留下最小值
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// @lc code=end
