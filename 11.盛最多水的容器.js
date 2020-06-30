/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    max = 0;
  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    max = max > area ? max : area;
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
// @lc code=end
