/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//   for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//     [s[i], s[j]] = [s[j], s[i]];
//   }
// };
var reverseString = function (s) {
  if (s.length <= 0) return;
  let cur = s.pop();
  reverseString(s);
  s.unshift(cur);
};
// @lc code=end
