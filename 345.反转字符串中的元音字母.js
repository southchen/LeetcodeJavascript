/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  s = s.split('');
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (set.has(s[i]) && set.has(s[j])) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    } else if (set.has(s[i])) {
      j--;
    } else {
      i++;
    }
  }
  return s.join('');
};
// @lc code=end
