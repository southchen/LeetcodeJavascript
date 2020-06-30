/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   if (nums.length <= 1) return false;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.slice(i + 1, nums.length).indexOf(nums[i]) != -1) return true;
//   }
//   return false;
// };
// var containsDuplicate = function (nums) {
//   return [...new Set(nums)].length !== nums.length;
// };
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

// @lc code=end
