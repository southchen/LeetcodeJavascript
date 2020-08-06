/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//DP
var numSquares = function (n) {
  const dp = [...Array(n + 1)].map((_) => 0); // 数组长度为n+1，值均为0
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }
  return dp[n];
};
//BFS
var numSquares = function (n) {
  let queue = [n];
  let visited = {};
  let level = 0;
  while (queue.length > 0) {
    // 层序遍历
    level++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.pop();
      for (let j = 1; j * j <= cur; j++) {
        let tmp = cur - j * j;
        // 找到答案
        if (tmp === 0) {
          return level;
        }
        if (!visited[tmp]) {
          queue.unshift(tmp);
          visited[tmp] = true;
        }
      }
    }
  }
  return level;
};

// @lc code=end
