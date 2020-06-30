/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   nums.forEach((n, i) => {
//     if (n === val) {
//       nums.splice(i, 1);
//     }
//   });
//   return nums.length;
// };

var removeElement = function (nums, val) {
  let i = 0,
    j = nums.length;
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j - 1];
      j--;
    } else {
      i++;
    }
  }
  return j;
};

// @lc code=end
