/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  // 双端队列优化时间复杂度, 时间复杂度O(n)
  const deque = []; // 存放在接下来的滑动窗口可能成为最大值的数
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // 清空失效元素
    while (deque[0] < i - k + 1) {
      deque.shift();
    }
    //pop掉比新数值小的
    while (nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    //push新数值
    deque.push(i);

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
//动态规划
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  if (n == 0) return [];
  if (k == 1) return nums;
  let res = [];
  let left = new Array(n),
    right = new Array(n);
  left[0] = nums[0];
  right[n - 1] = nums[n - 1];
  for (let i = 1; i < n; i++) {
    if (i % k == 0) left[i] = nums[i];
    else left[i] = Math.max(left[i - 1], nums[i]);
    let j = n - i - 1;
    if ((j + 1) % k == 0) right[j] = nums[j];
    else right[j] = Math.max(right[j + 1], nums[j]);
  }
  for (let i = 0; i < n - k + 1; i++) {
    res[i] = Math.max(left[i + k - 1], right[i]);
  }
  return res;
};

// @lc code=end
