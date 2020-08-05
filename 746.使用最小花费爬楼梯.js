/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
/**
 * 第 i 级台阶是第 i-1 级台阶的阶梯顶部。
 * 踏上第 i 级台阶花费 cost[i] ，直接迈一大步跨过而不踏上去则不用花费。
 * 楼梯顶部在数组之外，如果数组长度为 len，那么楼顶就在下标为 len
 */
dp[i-1] + cost[i] or dp[i-2]+cost[i]=>dp[i] = min(dp[i-2], dp[i-1]) + cost[i]
let minCostClimbingStairs = function (cost) {
  //push 0 to init
  cost.push(0);
  let dp = [],
    n = cost.length;
  //init dp with base case
  // 第 0 级 cost[0] 种方案
  dp[0] = cost[0];
  // 第 1 级，有两种情况,都为cost[1]
  // 1：分别踏上第0级与第1级台阶，花费cost[0] + cost[1]
  // 2：直接从地面开始迈两步直接踏上第1级台阶，花费cost[1]
  dp[1] = cost[1];
  //从第二个开始遍历
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }
  console.log(dp);
  return dp[n - 1];
};
//opti
let minCostClimbingStairs = function (cost) {
  let n = cost.length,
    n1 = cost[0],
    n2 = cost[1];
  for (let i = 2; i < n; i++) {
    let tmp = n2;
    n2 = Math.min(n1, n2) + cost[i];
    n1 = tmp;
  }
  return Math.min(n1, n2);
};

// @lc code=end
