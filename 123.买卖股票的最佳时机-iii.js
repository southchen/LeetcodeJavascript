/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
//dp
var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) {
    return 0;
  }
  let K = 2;
  //init 3D array
  let dp = Array(n)
    .fill(null)
    .map(() =>
      Array(K + 1)
        .fill(null)
        .map(() => Array(2).fill(0))
    );

  for (let i = 0; i < n; i++) {
    //这道题由于没有消掉 k 的影响，所以必须要对 k 进行穷举：
    for (let k = K; k >= 1; k--) {
      if (i == 0) {
        //base case
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      //transfer
      //第i天不持有：1前一天不持有，今天不变 2：前一天持有，今天售出
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      //第i天持有： 1前一天持有，今天不变 2：前一天不持有，进买入（k-1，因为今天买入，使用了一次k）
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  //最终，第n天，交易K次，不持有
  return dp[n - 1][K][0];
};
// @lc code=end
