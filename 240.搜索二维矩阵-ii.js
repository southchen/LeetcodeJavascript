/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 双指针
 * 是针对有序二维数组的“二分查询法”。
 * 选左上角，往右走和往下走都增大，不能选选右下角，往上走和往左走都减小，不能选
 * 选左下角，往右走增大，往上走减小，可选
 * 选右上角，往下走增大，往左走减小，可选
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length < 1) return false;
  //起点的选择
  let row = matrix.length - 1;
  let col = 0;
  while (row >= 0 && col < matrix[0].length) {
    if (target === matrix[row][col]) return true;
    if (target < matrix[row][col]) {
      row--;
    } else {
      col++;
    }
  }
  return false;
};
// @lc code=end
