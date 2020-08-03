/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
假设对于以 nums[i] 结尾的序列，我们知道最长序列的长度 length[i]，以及具有该长度的序列的 count[i]。
对于每一个 i<j 和一个 A[i]<A[j]，我们可以将一个 A[j] 附加到以 A[i] 结尾的最长子序列上。
如果这些序列比 length[j] 长，那么我们就知道我们有count[i] 个长度为 length 的序列。
如果这些序列的长度与 length[j] 相等，那么我们就知道现在有 count[i] 个额外的序列（即 count[j]+=count[i]。
 */
// var findNumberOfLIS = function (nums) {
//   let len = nums.length;
//   let length = Array(len).fill(1);
//   let count = Array(len).fill(1);
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         if (length[i] < length[j]) {
//           length[i] = length[j] + 1;
//           count[i] = count[j];
//         } else if (length[i] == length[j] + 1) {
//           count_dp[i] += count_dp[j];
//         }
//       }
//     }
//   }
//   let max = Math.max(...length);
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     if (length[i] === max) sum += count[i];
//   }

//   return sum;
// };
var findNumberOfLIS = function (nums) {
  let len = nums.length;
  if (len <= 1) return len;
  let length = new Array(len).fill(0),
    counts = new Array(len).fill(1);
  for (let i = 0; i < len; l++) {
    for (let j = 0; j < l; j++) {
      if (nums[j] < nums[i]) {
        if (length[j] >= length[l]) {
          length[i] = length[j] + 1;
          counts[i] = counts[j];
        } else if (length[j] + 1 === length[i]) {
          counts[i] += counts[j];
        }
      }
    }
  }
  let ans = 0;
  let max = Math.max(...length);
  for (let j = 0; j < len; j++) {
    if (length[j] === max) {
      ans += counts[j];
    }
  }
  return ans;
};

// @lc code=end
