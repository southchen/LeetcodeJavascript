/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let index = 0;
//   let max = 0;
//   let j = 0;
//   for (let i = 0; i < s.length; i++) {
//     index = s.substring(index, i).indexOf(s[i]) + 1;
//     if (index == 0) {
//       max = Math.max(max, i - j + 1);
//     } else {
//       j = j + index;
//     }
//   }
//   return max;
// };

// @lc code=end
