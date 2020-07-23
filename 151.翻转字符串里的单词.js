/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   s = s.split(' ');
//   let temp = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] != '') temp.push(s[i]);
//   }
//   temp = temp.join(' ');
//   return temp;
// };
var reverseWords = function (s) {
  s = s.split(' ');
  let stack = [];
  for (let word of s) {
    stack.push(word);
  }
  s.lenght = 0;
  while (stack.length > 0) {
    let cur = stack.pop();
    if (cur != '') s.push(cur);
  }
  s = s.join(' ');
  return s;
};

// @lc code=end
