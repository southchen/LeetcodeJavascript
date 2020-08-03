/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//DP
//二维数组
//在子数组 array[i..j] 中，我们要求的子序列（最长回文子序列）的长度为 dp[i][j]

var longestPalindromeSubseq = function (s) {
  var arr = s.split('');
  var dp = new Array(arr.length).fill(0).map(function (a) {
    return new Array(arr.length).fill(1);
  });
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        if (i + 1 > j - 1) {
          dp[i][j] = 2;
        } else {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][arr.length - 1];
};
// @lc code=end
