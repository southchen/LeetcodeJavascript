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
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (!n) return 0;
  let dp = new Array(n);
  //init 为1，每个元素本身也是一个子序列，长度为1
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    //我们需要找前面比自己小的；
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
/**二分法优化
 */
var lengthOfLIS = function (nums) {
  let tails = [];
  nums.forEach((num) => {
    // 二分搜索：找到大于等于 num 的左侧边界，如果全小，则 left = tails.length
    let left = 0,
      right = tails.length - 1,
      mid;
    while (left <= right) {
      mid = left + parseInt((right - left) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else if (tails[mid] > num) {
        right = mid - 1;
      } else if (tails[mid] === num) {
        // 收缩左侧边界
        right = mid - 1;
      }
    }
    tails[left] = num;
  });
  return tails.length;
};

// @lc code=end
