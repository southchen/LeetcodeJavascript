/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return '';
  let target = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (var j = 0; j < target.length && j < strs[i].length; j++) {
      if (target[j] != strs[i][j]) break;
    }
    target = target.substr(0, j);
    if (target.length == 0) return '';
  }
  return target;
};
// @lc code=end
