/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
数组从小到大排序
固定值从最小到最大循环
start和end在固定值右侧移动寻找 start + end = -(固定值)
如果三数和小于0，说明start对应值太小，应该右移，反之end左移
如果三数和等于零就记录下来, L右移，注意如果L的后一个和当前值相等就需要跳过，参考[0,0,0,0]
L 不能超过 R
此时 固定值i 右移，注意后一个i和当前i应该不相等，相等需要跳过，参考[-4,-1,-1,0,1,2]的-1

*/
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let sum = 0;
  for (let p = 0; p < nums.length; p++) {
    if (nums[p] > 0) break;
    if (nums[p] === nums[p - 1]) continue;
    let l = p + 1;
    let r = nums.length - 1;
    while (l < r) {
      sum = nums[l] + nums[r] + nums[p];
      if (sum === 0) {
        res.push([nums[p], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        l++;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};
// @lc code=end
