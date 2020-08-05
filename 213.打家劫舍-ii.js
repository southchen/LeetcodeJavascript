/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//dp 二维
// var rob = function (nums) {
//   var n = nums.length;
//   if (n == 1) {
//     return nums[0];
//   } else if (n == 0) {
//     return 0;
//   }
//   function dpGO(nums) {
//     var n = nums.length;
//     var dp = Array.from(new Array(n), () => new Array(n));
//     dp[0][0] = 0;
//     dp[0][1] = nums[0];
//     for (var i = 1; i < nums.length; i++) {
//       dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
//       dp[i][1] = nums[i] + dp[i - 1][0];
//     }
//     return Math.max(dp[n - 1][0], dp[n - 1][1]);
//   }
//   var need1 = dpGO(nums.slice(1));
//   var need2 = dpGO(nums.slice(0, nums.length - 1));
//   return Math.max(need1, need2);
// };

//66%
//拆成两个数组0到n-1 和 1 到n, 返回最大的即可
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp1 = new Array(nums.length).fill(0);
  let dp2 = new Array(nums.length).fill(0);
  (dp1[0] = 0), (dp2[0] = 0), (dp1[1] = nums[0]), (dp2[1] = nums[1]);
  for (let i = 2; i < nums.length; ++i) {
    dp1[i] = Math.max(dp1[i - 1], nums[i - 1] + dp1[i - 2]);
  }
  for (let i = 2; i < nums.length; ++i) {
    dp2[i] = Math.max(dp2[i - 1], nums[i] + dp2[i - 2]);
  }
  return Math.max(dp1[nums.length - 1], dp2[nums.length - 1]);
};

//拆分成两个问题，每个子问题类似于198题；44.7%
var rob = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  return Math.max(help(nums.slice(0, n - 1)), help(nums.slice(1, n)));
};

function help(nums) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < nums.length + 2; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
  }
  return dp[nums.length + 1];
}

// @lc code=end
