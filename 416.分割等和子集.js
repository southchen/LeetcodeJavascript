/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//是否可以从这个数组中挑选出一些正整数，使得这些数的和等于整个数组元素的和的一半
//给一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。现在让你装物品，是否存在一种装法，能够恰好将背包装满？
var canPartition = function (nums) {
  if (nums === null || nums.length <= 0) return false;
  let length = nums.length;
  let sum = nums.reduce((pre, cur) => pre + cur);
  //sum为奇数，退出
  if (sum & 1) {
    return false;
  }
  let target = sum / 2;
  // dp[i][j]表示下标0~i之间是否存在和为j的子集
  let dp = Array(length)
    .fill(null)
    .map(() => Array(target + 1).fill(false));

  // 对i=0进行初始化
  for (let i = 0; i < target + 1; i++) {
    if (nums[0] === i) {
      dp[0][i] = true;
    }
  }
  // i从1开始
  for (let i = 1; i < length; i++) {
    for (let j = 0; j <= target; j++) {
      // 状态转移方程
      if (j >= nums[i]) {
        //有足够容量，可以放
        //不放，前一个已经达到要求 || 放，取决于前一个，和为j-nums[i]的状态
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        //第i个大于可用容量，不能放，继承前一个状态
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[length - 1][target];
};

//优化
var canPartition = function (nums) {
  if (nums === null || nums.length <= 0) return false;
  let sum = nums.reduce(function (pre, cur) {
    return pre + cur;
  });
  if (sum & 1) {
    return false;
  }
  let target = sum / 2;
  let dp = new Array(target + 1).fill(false);
  // 初始化dp
  for (let i = 0; i < target + 1; i++) {
    if (nums[0] === i) {
      dp[i] = true;
      break;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    // 如果j < nums[i]那么j-nums[i]为负值，没必要继续进行判断
    for (let j = target; j >= 0 && j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }
  return dp[target];
};

// @lc code=end
