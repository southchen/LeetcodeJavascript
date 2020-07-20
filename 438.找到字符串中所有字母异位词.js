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
  let res = [];
  let needed = 0;
  let map = {};
  for (let c of p) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
      needed++;
    }
  }
  let l = 0,
    r = 0;
  while (r < s.length) {
    if (map[s[r]] != undefined) {
      map[s[r]]--;
      if (map[s[r]] === 0) {
        needed--;
        while (needed === 0) {
          Object.values(map).every((v) => v == 0) && res.push(l);
          if (map[s[l]] != undefined) {
            map[s[l]]++;
            if (map[s[l]] > 0) {
              needed++;
            }
          }
          l++;
        }
    r++;
  }
  return res;
};
// @lc code=end
