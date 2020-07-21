/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else if (nums[mid] < nums[r]) {
      r = mid;
    } else {
      //when nums[mid]===nums[r]
      //shrink the right, otherwise if shrink l++, will skip the target
      r--;
    }
  }
  return nums[l];
};
// @lc code=end
