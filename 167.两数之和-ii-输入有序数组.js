/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
};
// @lc code=end
