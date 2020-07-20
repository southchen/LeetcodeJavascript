/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//double pointers
// var lengthOfLongestSubstring = function (s) {
//   let index = 0;
//   let max = 0;
//   let j = 0;
//   for (let i = 0; i < s.length; i++) {
//     index = s.substring(index, i).indexOf(s[i]) + 1;
//     if (index == 0) {
//       max = Math.max(max, i - j + 1);
//     } else {
//       j = j + index;
//     }
//   }
//   return max;
// };
//slinding window

//sliding window
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0;
  let map = {};
  let max = 0;
  while (r < s.length) {
    map[s[r]] ? map[s[r]]++ : (map[s[r]] = 1);
    while (map[s[r]] > 1) {
      map[s[l]]--;
      l++;
    }
    max = Math.max(r - l + 1, max);
    r++;
  }
  return max;
};
//opitmization: use Map to store the element:index
//everytime encounter the duplicate one (Map.has())
//no need to move left pointer one step per loop
//move left pointer to the max(left, and the duplicate + 1)
var lengthOfLongestSubstring = function (s) {
  let map = new Map(),
    max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};

// @lc code=end
