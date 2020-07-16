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
/**解题想法
外层循环主指针 i 遍历数组。内层循环，双指针去寻找满足三数和等于0的项
排序的意义
因为不能有重复的解，为了简化操作，我们先对数组预排序，则我们判断一个元素是否重复，只需看它和它之前位置的元素是否相等即可
双指针的移动时，避免出现重复解
得到一个解后，需要左右指针向“内”移动，为了避免指向重复的元素
左指针要在 left < right 的前提下，一直向右移动到不重复的元素上
右指针要在 left < right 的前提下，一直向左移动到不重复的元素上
可以稍微优化
经过了排序，如果外层遍历的数已经大于0，则另外两个数一定大于0，sum不会等于0，所以这种情况直接break结束遍历
*/
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let sum = 0;
  for (let p = 0; p < nums.length; p++) {
    if (nums[p] > 0) break;
    if (nums[p] === nums[p - 1]) continue; // 遍历到重复的数，跳过
    let l = p + 1;
    let r = nums.length - 1;
    while (l < r) {
      sum = nums[l] + nums[r] + nums[p];
      if (sum === 0) {
        res.push([nums[p], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++; //直到指向不一样的数
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
