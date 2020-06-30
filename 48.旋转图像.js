/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  function swap(arr, i, j, m, n) {
    [arr[i][j], arr[m][n]] = [arr[m][n], arr[i][j]];
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      swap(matrix, i, j, n - j - 1, n - i - 1);
    }
  }

  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - i - 1, j);
    }
  }
};
// @lc code=end
