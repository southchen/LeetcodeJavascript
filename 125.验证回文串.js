/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   s = s
//     .toLowerCase()
//     .replace(/[^\d^\w]/g, '')
//     .split('');

//   return s.join('') === s.reverse().join('');
// };
var isPalindrome = function (s) {
  s = s.toLowerCase();
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

// @lc code=end
