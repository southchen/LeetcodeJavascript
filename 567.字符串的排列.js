/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var minWindow = function (s, t) {
//   let needed = 0;
//   let map = {};
//   for (let c of t) {
//     if (map[c]) {
//       map[c]++;
//     } else {
//       map[c] = 1;
//       needed++;
//     }
//   }
//   let l = 0,
//     r = 0;
//   let min = Infinity;
//   let newL;
//   while (r < s.length) {
//     if (map[s[r]] !== undefined) {
//       map[s[r]]--;
//       if (map[s[r]] === 0) {
//         needed--;
//         while (needed === 0) {
//           if (min > r - l + 1) {
//             min = r - l + 1;
//             newL = l;
//           }
//           if (map[s[l]] !== undefined) {
//             map[s[l]]++;
//           }
//           if (map[s[l]] > 0) needed++;
//           l++;
//         }
//       }
//     }

//     r++;
//   }
//   return s.substring(newL, newL + min);
// };

var checkInclusion = function (s1, s2) {
  let needed = 0;
  let map = {};
  for (let c of s1) {
    if (map[c]) {
      map[c]++;
    } else {
      map[c] = 1;
      needed++;
    }
  }
  let l = 0,
    r = 0;
  while (r < s2.length) {
    //condition of expanding
    if (map[s2[r]] != undefined) {
      map[s2[r]]--;
      if (map[s2[r]] === 0) {
        needed--;
        //the condition of shrinking
        while (needed === 0) {
          //check if match the target condition
          if (r - l + 1 === s1.length) return true;
          if (map[s2[l]] != undefined) {
            map[s2[l]]++;
            if (map[s2[l]] > 0) needed++;
          }
          l++;
        }
      }
    }
    r++;
  }
  return false;
};

// @lc code=end
