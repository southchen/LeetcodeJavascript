/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//投票算法
// var majorityElement = function (nums) {
//   let count = 1;
//   let majority = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (count === 0) {
//       majority = nums[i];
//     }
//     if (nums[i] === majority) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   return majority;
// };
//排序后中间位置
// var majorityElement = function (nums) {
//   nums.sort((a, b) => a - b);
//   return nums[Math.floor(nums.length / 2)];
// };
const majorityElement = (nums) => {
  //base case

  if (nums.length <= 1) return nums[0];
  //split
  let mid = nums.length / 2;
  let left = nums.slice(0, mid);
  let right = nums.slice(mid, nums.length);

  //recursion
  let majLeft = majorityElement(left);
  let majRight = majorityElement(right);

  if (majLeft === majRight) return majLeft;

  //combination
  const combine = (majLeft, majRight) => {
    let countLeft = 0,
      countRight = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === majLeft) {
        countLeft++;
      } else if (nums[i] === majRight) {
        countRight++;
      }
    }
    return countLeft > countRight ? majLeft : majRight;
  };

  return combine(majLeft, majRight);
};
// @lc code=end
