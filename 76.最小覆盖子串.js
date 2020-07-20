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
  let res = Infinity;
  let resStart;
  for (let c of t) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
      needed++;
    }
  }
  for (let r = 0, l = 0; r < s.length; r++) {
    if (map[s[r]] != undefined) map[s[r]]--;
    //map[s[r]] ? map[s[r]]--:null; ×
    if (map[s[r]] === 0) needed--;
    while (needed === 0) {
      //   res = Math.min(res, r - l + 1);
      //   resStart = Math.max(resStart, l);
      if (r - l + 1 < res) {
        res = r - l + 1; // 更新minLen
        resStart = l; // 更新最小子串的起点
      }
      if (map[s[l]] != undefined) map[s[l]]++;
      if (map[s[l]] > 0) needed++;
      l++;
    }
  }

  return s.substring(resStart, resStart + res);
};

// @lc code=end
