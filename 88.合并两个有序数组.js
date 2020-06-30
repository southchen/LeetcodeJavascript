/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (p2 >= 0 && p1 >= 0) {
    if (nums2[p2] >= nums1[p1]) {
      nums1[p] = nums2[p2];
      p2--;
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }
    p--;
  }
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
  return nums1;
};

// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m, n, ...nums2);
//   return nums1.sort((a, b) => a - b);
// };

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,nums1.length - m)
//     nums2.splice(n,nums2.length - n)
//     Object.assign(nums1,[...nums1,...nums2].sort((a,b) => a - b))
// };

// @lc code=end
