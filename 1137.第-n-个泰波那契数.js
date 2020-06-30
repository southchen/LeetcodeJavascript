/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  const f = [0, 1, 1];

  for (let a = 3; a <= n; a++) {
    f[a] = f[a - 3] + f[a - 2] + f[a - 1];
  }

  return f[n];
}

// @lc code=end
