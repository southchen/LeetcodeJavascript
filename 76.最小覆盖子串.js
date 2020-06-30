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
// 拿这个例子举例：输入: S = "ADOBECODEBANC", T = "ABC"
// var minWindow = function (s, t) {
//   let left = 0,
//     right = 0,
//     need = {}, // 使用 object 存储 t 中的每个字符的所需数量
//     map = {}, // 当前区间的有效字符以及数量
//     count = 0, // 存储有效字符数量， 用来判断找到一个有效区间（ 判断条件：count === t.length ）
//     // !!考虑到 t 中有重复的字符串，所以count的累加和累减需要注意两点:
//     // 累加的条件：当前区间( map )内的当前字符的数量 小于 ( need )中的当前字符串的数量 => 执行count++
//     // 累减的条件：当前区间( map )内的当前字符的数量 等于 ( need )中的当前字符串的数量 => 执行count--
//     r = true, // true: 上一次是 right指针 右移 | false: 上一次是 left指针 右移
//     result = ''; // 初始化最终结果字符串

//   // 初始化need 和 map，map用来记录，need作为符合条件 用作map的对比
//   for (let i = 0; i < t.length; i++) {
//     need[t[i]] = need[t[i]] === undefined ? 1 : need[t[i]] + 1;
//     map[t[i]] = 0;
//   }
//   // 初始化之后 need: { A: 1, B: 1, C: 1 }   map: { A: 0, B: 0, C: 0 }

//   while (right < s.length) {
//     // 终止条件的意思是：right指针到达最右侧，不会再有新的有效区间了，循环停止，当前的有效区间即为最小区间
//     if (r) {
//       // 如果上一次是 right指针 右移
//       if (s[right] in map) {
//         // 判断字符串是否为 t 中的字符串
//         if (map[s[right]] < need[s[right]]) {
//           // 判断是否符合累加条件
//           count = count + 1;
//         }
//         map[s[right]] = map[s[right]] + 1;
//       }
//     }
//     let temp = s.slice(left, right + 1); // 当前区间
//     if (count === t.length) {
//       // 当前为有效区间
//       if (s[left] in map) {
//         // 如果当前有效区间的最左侧字符为有效字符，说明当前区间不能再执行 left指针 右移进行压缩了
//         result = temp.length < result.length || result === '' ? temp : result; // 判断当前有效区间是否为更小的子串
//         if (map[s[left]] === need[s[left]]) {
//           // 判断是否符合累减条件
//           count = count - 1;
//         }
//         map[s[left]] = map[s[left]] - 1;
//       }
//       left = left + 1; // left指针 右移，开始寻找下一个有效区间
//       r = false; // 本次是 left指针 右移，所以 r = false
//     } else {
//       // 当前不是有效区间
//       right = right + 1; // right指针 右移，继续增大区间，直到找到有效区间
//       r = true; // 本次是 left指针 右移，所以 r = false
//     }
//   }

//   return result;
// };

var minWindow = function (s, t) {
  let need = {};
  let r = 0,
    l = 0,
    newl = 0,
    min = Infinity;
  let needType = 0;
  for (let char of s) {
    if (!need[char]) {
      need[cahr] = 1;
      needType++;
    } else {
      need[char]++;
    }
  }

  for (; r < s.length; r++) {
    if (map[s[r]]) {
      map[s[r]]--;
    } else if (map[s[r]] === 0) {
      needType--;
    } else if (needType === 0) {
      while (needType === 0) {
        min = Math.min(min, r - l + 1);
        newl = l;
        l++;
        if (mpa[s[l]]) {
          map[s[l]]++;
          if (map[s[l]] > 0) needType++;
        }
      }
    }
  }
  return s.slice(newl, r + 1);
};
// @lc code=end
