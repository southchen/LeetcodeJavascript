/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function (s) {
//   if (s.length < 0) return;
//   if (s.length === 1) return 0;
//   let arr = s.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)].indexOf(arr[i]) ==
//       -1
//     ) {
//       return i;
//     }
//   }
//   return -1;
// };
var firstUniqChar = function (s) {
  let map = new Map();
  for (let char of s) {
    let count = map.has(char) || 0;
    map.set(char, count + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};
// @lc code=end
