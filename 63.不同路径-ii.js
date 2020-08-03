/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
//var uniquePathsWithObstacles = function (obstacleGrid) {
//   let m = obstacleGrid.length;
//   let n = obstacleGrid[0].length;
//   let dp = Array(m)
//     .fill(null)
//     .map(() => Array(n).fill(null));
//   if (obstacleGrid[0][0] === 1) return 0;

//   for (var i = 0; i < m; i++) {
//     for (var j = 0; j < n; j++) {
//       if (i == 0 && j == 0) {
//         dp[0][0] = 1;
//       } else if (obstacleGrid[i][j] === 1) {
//         dp[i][j] = 0;
//       } else if (i == 0 && j >= 1) {
//         dp[i][j] = dp[i][j - 1];
//       } else if (j == 0 && i >= 1) {
//         dp[i][j] = dp[i - 1][j];
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//   }

//   return dp[m - 1][n - 1];
// };
//优化
/**
 * 初始化第一步可达，为1
 * for双循环内就可以少一层判断
 **/
var uniquePathsWithObstacles = function (obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = Array(m).fill(0);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        result[j] = 1;
      }
      if (obstacleGrid[i][j] == 1) {
        result[j] = 0;
      } else if (j > 0) {
        result[j] += result[j - 1];
      }
    }
  }
  return result[m - 1];
};
var uniquePathsWithObstacles = function (obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = Array(m).fill(0);
  result[0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        result[j] = 0;
      } else if (j > 0) {
        result[j] += result[j - 1];
      }
    }
  }
  return result[m - 1];
};

// @lc code=end
