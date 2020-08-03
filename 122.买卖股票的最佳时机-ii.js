/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
//在下跌前一天卖出

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};
//greedy，每天为一步，只取正收益， 负收益不要（设为0）。而每一天的收益 = 今天股价 - 昨天的股价。
//（看了不少人的题解都需要判断数组长度等于0、1的情况，其实直接从1开始循环即可，不用判断）

var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    sum += Math.max(prices[i] - prices[i - 1], 0);
  }
  return sum;
};

//dp
var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) {
    return 0;
  }
  let dp = Array.from(new Array(n), () => new Array(2));
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      dp[0][0] = 0;
      dp[0][1] = -prices[0];
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  return dp[n - 1][0];
};

// @lc code=end
