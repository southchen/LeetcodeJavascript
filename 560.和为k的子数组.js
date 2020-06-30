/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 前缀和：从 第 0 项 到 当前项 的 总和
 * 我们不关心 前缀和 具体对应哪一项，只关心 前缀和 的值和 出现次数
 * 用 prefixSum 变量，保存当前项的前缀和，存入 map
 * map 存什么键值对：
键： 前缀和，从第 0 项到当前项的总和
值： 这个 前缀和 值出现了几次

保存一个数组的前缀和，然后利用差分法得出任意区间段的和，
 */
var subarraySum = function (nums, k) {
  const hashmap = {};
  let acc = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];

    if (acc === k) count++;

    if (hashmap[acc - k]) {
      count += hashmap[acc - k];
    }

    if (hashmap[acc]) {
      hashmap[acc]++;
    } else {
      hashmap[acc] = 1;
    }
  }

  return count;
};

// @lc code=end
