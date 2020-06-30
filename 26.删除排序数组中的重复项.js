/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function (nums) {
//   // 剪枝
//   if (nums.length === 0) {
//     return 0;
//   }
//   //慢指针
//   let j = 0;
//   //快指针
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[j]) {
//       j++;
//       nums[j] = nums[i];
//     }
//   }
//   return j + 1;
// };

// @lc code=end
