/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  if (nums.length <= 0) return nums;
  nums = nums.sort((a, b) => b - a);
  let res = [];
  let max = 0;
  let sum = nums.reduce((acc, cur) => {
    return (acc += cur);
  });
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    max += nums[i];
    res.push(nums[i]);
    if (max > sum) return res;
  }
};
// @lc code=end
