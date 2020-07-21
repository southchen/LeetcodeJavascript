/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let start = 0;
  let end = row;
  while (start <= end) {
    let mid = start + ((row - start) >> 1);
    if (matrix[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  row = satrt;
  start = 0;
  end = col;
  while (start <= end) {
    let mid = start + ((row - start) >> 1);
    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};
// @lc code=end
