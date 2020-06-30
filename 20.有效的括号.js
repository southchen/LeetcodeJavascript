/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;
  let stack = [];
  let map = { '(': ')', '[': ']', '{': '}' };
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(map).indexOf(s[i]) >= 0) {
      stack.push(s[i]);
    } else {
      let cur = stack.pop();
      if (map[cur] !== s[i]) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
// @lc code=end
