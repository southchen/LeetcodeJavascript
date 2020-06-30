/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = map.get(target - nums[i]);
    if (otherIndex !== undefined) return [otherIndex, i];
    map.set(nums[i], i);
  }
};
var twoSum = function (nums, target) {
  let map = {}; //key数字 value下标
  let loop = 0; //循环次数
  let dis; //目标与当前值的差
  while (loop < nums.length) {
    dis = target - nums[loop];
    if (map[dis] != undefined) {
      return [map[dis], loop];
    }
    map[nums[loop]] = loop;
    loop++;
  }
  return;
};

// @lc code=end
