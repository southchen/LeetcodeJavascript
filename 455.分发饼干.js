/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//优先满足胃口小的小朋友的需求，即贪心问题
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  var i = 0,
    j = 0;
  var count = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }
  return count;
};
// @lc code=end
