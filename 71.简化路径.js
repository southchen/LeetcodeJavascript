/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (path == null) {
    return path;
  }
  let arr = path.split('/');
  let stack = [];
  for (let char of arr) {
    if (char === '.' || char === '') {
      continue;
    } else if (char === '..') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return '/' + stack.join('/');
};
// @lc code=end
