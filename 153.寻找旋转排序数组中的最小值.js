/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*题目就是要我们找出两个单增区间的边界
很容易想到二分查找
在循环中求出 中间元素，循环条件是 left < right，结束遍历时，我们让left和right是相邻的整数，并且我们让left是我们要的
如果 nums[mid] > nums[right] ，则说明 mid 处在左边的单增区间，目标元素在mid的右侧，所以我们让 left = mid + 1;
否则，mid 处在右边的单增区间中，目标元素在mid的左侧，我们让right = mid;
一个+1，一个不+1，到时候取 left 就好
*/
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;

  let min = Infinity;
  //the existing
  while (l < r) {
    let mid = (r + l) >> 1;

    if (nums[mid] > nums[l]) {
      let l = mid + 1;
    } else {
      r = mid;
    }
  }
  //return the l pointer
  return nums[l];
};
// @lc code=end
