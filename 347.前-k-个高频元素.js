/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  nums.forEach((num) => {
    return (map[num] = map[num] ? map[num] + 1 : 1);
  });
  let keys = Object.keys(map);
  let sorted = keys.sort((a, b) => map[b] - map[a]);
  return sorted.slice(0, k);
};
// @lc code=end
