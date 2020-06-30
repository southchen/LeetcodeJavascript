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
// var maxProfit = function (prices) {
//   let minprice = Number.MAX_SAFE_INTEGER;
//   let max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minprice) {
//       minprice = prices[i];
//     } else {
//       max = Math.max(max, prices[i] - minprice);
//     }
//   }
//   return max;
// };
var maxProfit = function (prices) {
  let minprice = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    minprice = minprice > price[i] ? price[i] : minprice;
    max = Math.max(max, price[i] - minprice);
  }
  return max;
};
// @lc code=end
