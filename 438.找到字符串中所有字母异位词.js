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
// var findAnagrams = function (s, p) {
//   let l = 0,
//     r = 0,
//     match = 0,
//     res = [];
//   let needs = {},
//     window = {};
//   for (let i = 0; i < p.length; i++) {
//     needs[p[i]] = needs[p[i]] ? (needs[p[i]] += 1) : 1;
//   }
//   let needLen = Object.keys(needs).length;
//   while (r < s.length) {
//     if (needs[s[r]]) {
//       window[s[r]] ? window[s[r]]++ : (window[s[r]] = 1);
//       if (window[s[r]] === needs[s[r]]) match++;
//     }
//     r++;

//     while (match === needLen) {
//       if (r - l === p.length) res.push(l);
//       if (needs[s[l]]) window[s[l]]--;

//       if (needs[s[l]] > window[s[l]]) match--;

//       l++;
//     }
//   }
//   return res;
// };
var findAnagrams = function (s, p) {
  let l = 0,
    r = 0;
  let res = [];
  let need = {},
    needType = 0;
  for (let char of p) {
    if (need[char]) {
      need[char]++;
    } else {
      need[char] = 1;
      needType++;
    }
  }
  for (; r < s.length; r++) {
    if (need[s[r]] != undefined) {
      need[s[r]]--;
      if (need[s[r]] == 0) {
        needType--;
      }
    }
    while (needType == 0) {
      if (r - l + 1 === p.length) {
        res.push(l);
      }
      if (need[s[l]] != undefined) {
        need[s[l]]++;
        if (need[s[l]] > 0) {
          needType++;
        }
      }
      l++;
    }
  }
  return res;
};

// @lc code=end
