/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) {
    return 0;
  }
  //2D array
  let dp = Array.from(new Array(n), () => new Array(2));
  //loop
  for (let i = 0; i < n; i++) {
    //base case
    //第0天
    if (i == 0) {
      //不持有，profit 0
      dp[i][0] = 0;
      //持有，只能是当天买的
      dp[i][1] = -prices[i];
      //不用算dp[0][1]/dp[0][0],直接i=>1
      continue;
    }
    //transfer
    //不拥有：1昨天没有今天不变 2昨天有今天卖
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    //持有：1昨天没有今天买 2昨天有今天不变
    dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
  }
  //最后一天，不持有（持有的话，利润肯定不如卖出去的大）
  return dp[n - 1][0];
};

// @lc code=end
