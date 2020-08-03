/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
//滑动窗口
/**
 * 我们可以枚举 A 和 B 所有的对齐方式。
 * 对齐的方式有两类：第一类为 A 不变，B 的首元素与 A 中的某个元素对齐；
 * 第二类为 B 不变，A 的首元素与 B 中的某个元素对齐。
 * 对于每一种对齐方式，我们计算它们相对位置相同的重复子数组即可。
 */
const findLength = (A, B) => {
  const m = A.length;
  const n = B.length;
  let res = 0;
  // A固定，移动B
  for (let i = 0; i <= n; i++) {
    const len = Math.min(m, n - i); // 当前窗口的长度
    const maxLen = getMaxLen(A, B, 0, i, len); //窗口左端是A[0]，窗口左端是B[i]
    res = Math.max(res, maxLen);
  }
  // B固定，移动A
  for (let i = 0; i <= m; i++) {
    const len = Math.min(n, m - i); // 当前窗口的长度
    const maxLen = getMaxLen(A, B, i, 0, len); //窗口左端是A[i]，窗口左端是B[0]
    res = Math.max(res, maxLen);
  }
  return res;
};
// 窗口左端对应A的位置是aStart，窗口左端对应B的位置是bStart
function getMaxLen(A, B, aStart, bStart, windowLen) {
  let res = 0;
  let subLen = 0;
  for (let i = 0; i < windowLen; i++) {
    // 遍历的范围是窗口的长度
    if (
      A[aStart + i] !== undefined && // 没有越界
      B[bStart + i] !== undefined && // 没有越界
      A[aStart + i] == B[bStart + i] // 当前项相同
    ) {
      subLen++; // subLen累加1
    } else {
      subLen = 0; // 这个窗口有“杂质”，废了
    }
    res = Math.max(res, subLen);
  }
  return res;
}
/***dp */
/*状态定义
dp[i][j]：为A[i:]和B[j:]最长公共前缀
转移方程
A[i] == B[j]时
dp[i][j] = dp[i-1][j-1] + 1;
A[i] != B[j]时
dp[i][j] = 0;
*/
var findLength = function (A, B) {
  let resMax = 0;
  let n1 = A.length,
    n2 = B.length;
  //let dp = Array.from(new Array(n1 + 1), () => new Array(n2 + 1).fill(0));
  let dp = Array(n1 + 1)
    .fill(null)
    .map(() => Array(n2 + 1).fill(0));
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        resMax = Math.max(resMax, dp[i][j]);
      }
    }
  }
  return resMax;
};
/**double pointer */
var findLength = function (A, B) {
  let resMax = 0,
    match = 0;
  let n1 = A.length,
    n2 = B.length;
  for (let j = 0; j < n2; j++) {
    match = 0;
    for (let i = 0, k = j; i < n1 && k < n2; i++, k++) {
      if (A[i] != B[k]) match = 0;
      else {
        match++;
        resMax = Math.max(resMax, match);
      }
    }
  }
  for (let i = 1; i < n1; i++) {
    match = 0;
    for (let j = 0, k = i; k < n1 && j < n2; j++, k++) {
      if (A[k] != B[j]) match = 0;
      else {
        match++;
        resMax = Math.max(resMax, match);
      }
    }
  }
  return resMax;
};

// @lc code=end
