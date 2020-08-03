/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//时间复杂度：O(m*n)
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0;
  let dp = Array(m).fill(Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
//优化
//O(2n)
/**
 * 下一行的值 = 当前行的值+上一行的值
 * dp[i][j] = dp[i-1][j]+dp[i][j-1]
 * 改为dp[j-1]代表上一阶段dp[j]的值
 * dp[j] = dp[j]+dp[j-1]
 * 即仅仅维护递推状态的最后两个状态
 */
var uniquePaths = function (m, n) {
  //上一行
  var pre = new Array(n).fill(1);
  //本行
  var cur = new Array(n).fill(1);
  for (var i = 1; i < m; i++) {
    for (var r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + pre[r];
    }
    pre = cur.slice(0);
  }
  console.log(cur);
  return pre[n - 1];
};
//
var uniquePaths = function (m, n) {
  var cur = new Array(n).fill(1);
  for (var i = 1; i < m; i++) {
    for (var r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + cur[r];
    }
  }
  return cur[n - 1];
};

// @lc code=end
