/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {};
  let needed = 0;
  for (ch of s) {
    if (!map[ch]) {
      map[ch] = 1;
      needed++;
    } else {
      map[ch]++;
    }
  }
  let l = 0,
    r = 0;
  let res = [];
  while (r <= s.length - 1) {
    if (map[s[r]] != undefined) {
      map[s[r]]--;
    }
    if (map[s[r]] === 0) {
      needed--;
    }
    while (needed == 0) {
      if (r - l + 1 === p.length) res.push(l);
      if (map[s[l]] != undefined) {
        map[s[l]]--;
        if (map[s[l]] === 0) needed++;
      }
      l++;
    }

    r++;
  }
  return res;
};
// @lc code=end
