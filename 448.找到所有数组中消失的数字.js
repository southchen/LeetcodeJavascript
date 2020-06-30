/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//
var findDisappearedNumbers = function (nums) {
  if (!nums) return [];
  let res = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) < 0) {
      res.push(i);
    }
  }
  return res;
};
/**
 * 和Leetcode 442.数组中重复的数据的解法相似：使用符号来标记元素是否出现过。下标为 i 的元素的符号，代表着值为 i + 1 的元素是否出现过，负号是出现过，正号是没出现过。
 */
var findDisappearedNumbers = function (nums) {
  for (let num of nums) {
    nums[Math.abs(num) - 1] = -Math.abs(nums[Math.abs(num) - 1]);
  }
  nums.forEach((item, index) => {
    if (item > 0) {
      nums[index] = index + 1;
    }
  });
  nums = nums.filter((num) => num > 0);
  return nums;
};
// @lc code=end
