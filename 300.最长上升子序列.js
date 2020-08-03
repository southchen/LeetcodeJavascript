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
/**二分法优化+贪心+dp
 * 如果已经得到的上升子序列的结尾的数越小，遍历的时候后面接上一个数，就会有更大的可能性构成一个更长的上升子序列；
既然结尾越小越好，我们可以记录在长度固定的情况下，结尾最小的那个元素的数值，这样定义也是为了方便得到「状态转移方程」。

 */

//二分搜索+贪心
/*
对于tails数组初始为 [] (tails 表示序列中最长的上升序列的最优值, 比如[2, 5] 和 [2, 3] 肯定取后者)
初始tails[0]=nums[0]，遍历nums
找到第一个大于nums[i]的数，用nums[i]替换
即二分法找左边界（l,r,mid,l指向第一个大于nums[i]）
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
//简洁版
function lengthOfLIS(nums) {
  let tails = [];
  for (const num of nums) {
    let left = 0,
      right = tails.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    tails[left] = num;
  }
  return tails.length;
}

// @lc code=end
