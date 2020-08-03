/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
  let even = chips.filter((ele) => ele % 2 === 0).length;
  let odd = chips.length - even;
  return even > odd ? odd : even;
};
// @lc code=end
