/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let resL;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  resL = r;
  let resR;
  (l = 0), (r = nums.length - 1);
  while (l <= r) {
    mid = l + ((r - l) >> 1);
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  resR = r;
  return nums[resR] === target ? [resL, resR] : [-1, -1];
};
var searchRange = function (nums, target) {
  let midL, midR;
  let searchL = function (l, r, target) {
    while (l <= r) {
      let mid = l + ((r - l) >> 1);
      if (nums[mid] < target) {
        // [mid, r]
        l = mid + 1;
      } else if (target < nums[mid]) {
        //[l, mid]
        r = mid - 1;
      } else if (target == nums[mid]) {
        r = mid - 1;
      }
    }
    return l;
  };
  midL = searchL(0, nums.length - 1, target);
  if (midL >= nums.length || nums[midL] != target) return [-1, -1];
  midR = searchL(midL + 1, nums.length - 1, target + 1);
  return [midL, midR - 1];
};

// @lc code=end
