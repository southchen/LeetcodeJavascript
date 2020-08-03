/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//dp
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len == 0) return 0;
  if (len == 1) return 1;
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], nums[i] > nums[j] ? dp[j] + 1 : 1);
    }
  }
  dp.sort((a, b) => b - a);
  return dp[0];
};

/**
 * 贪婪+二分
 * 考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
 * 设当前已求出的最长上升子序列的长度为en（初始时为 11），从前往后遍历数组nums，在遍历到nums[i] 时：
 * 如果 nums[i] > d[len]nums[i]>d[len] ，则直接加入到 dd 数组末尾，并更新en=len+1；
 * 否则，在 dd 数组中二分查找，找到第一个比nums[i] 小的数 d[k] ，并更新d[k+1]=nums[i]。
 *
 */
var lengthOfLIS = function (nums) {
  let d = [];
  nums.forEach((num) => {
    // 二分搜索：找到大于等于 num 的左侧边界，如果全小，则 left = d.length
    let left = 0,
      right = d.length - 1,
      mid;
    while (left <= right) {
      mid = left + parseInt((right - left) / 2);
      if (d[mid] < num) {
        left = mid + 1;
      } else if (d[mid] > num) {
        right = mid - 1;
      } else if (d[mid] === num) {
        right = mid - 1;
      }
    }
    d[left] = num;
  });

  return d.length;
>>>>>>> 6ec3d5ee0cb3f5f542527f3e567cfda77bdbba76
};

// @lc code=end
