/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   let map = {},
//     res = [];
//   nums1.forEach((num) => {
//     map[num] ? map[num]++ : (map[num] = 1);
//   });

//   nums2.forEach((num) => {
//     if (map[num] != undefined) map[num]--;

//     if (map[num] >= 0) res.push(num);
//   });
//   return res;
// };
// var intersect = function (nums1, nums2) {
//   let res = [];
//   for (let num of nums2) {
//     let index = nums1.indexOf(num);
//     if (index != -1) {
//       res.push(...nums1.splice(index, 1));
//     }
//   }
//   return res;
// };
var intersect = function (nums1, nums2) {
  let i = 0,
    j = 0,
    k = 0;
  while ((i < nums1.length, j < nums2.length)) {
    if (nums1[i] === nums2[j]) {
      nums1[k] = nums1[i];
      i++;
      j++;
      k++;
    } else if (nums[i] < nums[j]) {
      i++;
    } else {
      j++;
    }
  }
  return nums.slice(0, k + 1);
};
// @lc code=end
