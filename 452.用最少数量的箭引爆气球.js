/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let len = points.length;
  if (len < 1) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let pre = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > points[pre][1]) {
      count++;
      pre = i;
    }
  }
  return count;
};
// @lc code=end
