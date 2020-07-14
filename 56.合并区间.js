/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/**
 * 变量命名释义
candidate：候选者。候选进入 res 数组，初始值为第一个子数组
cur：当前遍历的区间，从数组第二项开始遍历
何时推入 res 数组
如果 candidate 和 cur 无法合并，就让 candidate 进入 res 数组，并让 cur 区间成为新的 candidate
如果 candidate 和 cur 区间能合并，则将 candidate 修改为合并后的区间，但不会推入 res 数组，因为它要继续和别人试图合并。

 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let candidate = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (candidate[1] >= cur[0]) {
      // 有重合 能合并
      candidate[1] = Math.max(cur[1], candidate[1]); // 左端不变 右端取大的
    } else {
      // 不重合 不能合并
      res.push(candidate);
      candidate = cur;
    }
  }
  res.push(candidate);
  return res;
};
// @lc code=end
