/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1,
    mid,
    right = Math.floor(x / 2);
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

// @lc code=end
