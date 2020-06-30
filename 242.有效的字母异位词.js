/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = {};
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  for (let char of t) {
    if (!map[char]) {
      return false;
    } else {
      map[char]--;
    }
  }
  return Object.values(map).every((item) => item === 0);
};
// @lc code=end
