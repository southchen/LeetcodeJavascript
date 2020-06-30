/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//       return nums[i];
//     }
//   }
// };
var findDuplicate = function (nums) {
  let s = 0,
    f = 0;
  while (true) {
    f = nums[nums[f]];
    s = nums[s];
    if (s === f) {
      let p = 0;
      while (nums[p] !== nums[s]) {
        p = nums[p];
        s = nums[s];
      }
      return nums[p];
    }
  }
};
var findDuplicate = function (nums) {
  let result = undefined;
  for (let i = 0; i < nums.length; i++) {
    let flagIndex = Math.abs(nums[i]);
    if (nums[flagIndex] < 0) {
      result = flagIndex;
      break;
    }
    nums[flagIndex] = -nums[flagIndex];
  }
  //恢复
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    }
  }
  return result;
};

// @lc code=end
