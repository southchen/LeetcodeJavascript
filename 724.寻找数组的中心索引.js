/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*方法：前缀和
算法：

S 是数组的和，当索引 i 是中心索引时，位于 i 左边数组元素的和 leftsum 满足 S - nums[i] - leftsum。
我们只需要判断当前索引 i 是否满足 leftsum==S-nums[i]-leftsum 并动态计算 leftsum 的值。

*/
var pivotIndex = function (nums) {
  if (nums.length < 1) return -1;
  let sum = nums.reduce((a, b) => (a += b));
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i] - leftSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};
// @lc code=end
