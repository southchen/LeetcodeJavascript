/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let needed = 0;
  let map = {};
  let l = 0,
    r = 0;
  let min = Infinity;
  let newL;
  while (r < s.length) {
    if (map[s[r]] !== undefined) {
      map[s[r]]--;
      if (map[s[r]] === 0) {
        needed--;
        while (needed === 0) {
          if (min > r - l + 1) {
            min = r - l + 1;
            newL = l;
          }
          if (map[s[l]] !== undefined) {
            map[s[l]]++;
          }
          if (map[s[l]] > 0) needed++;
          l++;
        }
      }
      if (map[s[l]] != undefined) map[s[l]]++;
      if (map[s[l]] > 0) needed++;
      l++;
    }

    r++;
  }

  return s.substring(newL, newL + min);
};

// @lc code=end
