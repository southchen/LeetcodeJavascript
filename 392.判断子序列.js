/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;
  let match = s.length;
  for (let c of s) {
    for (let i = j; i < t.length; i++) {
      if (t[i] === c) {
        j = i + 1;
        match--;
        break;
      }
    }
  }
  return match === 0 ? true : false;
};
// @lc code=end
