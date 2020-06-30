/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路
// 确定第一个数，在左右指针移动过程中，更新与target差值最小的结果
// 技巧
// 排序原数组
// nums[right] >= nums[left]
// 确定一个数 x
// res = x + nums[left] + nums[right]
// 当 sum - target < res - target 时
// res = sum
// 当 sum == target 时
// 返回 sum 即为所求
// 当 sum > target
// 根据从小到大的排序方式，左右指针不能再增大，只有右指针能够缩小，进而缩小 sum 值
// right--
// 当 sum < target
// 原理同上，只不过先从小的元素累加起
// left++

var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  for (let p = 0; p < nums.length; p++) {
    let l = p + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[p] + nums[l] + nums[r];
      res = Math.abs(sum - target) < Math.abs(res - target) ? sum : res;
      if (sum === target) return sum;
      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};
// @lc code=end
