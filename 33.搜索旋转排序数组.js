/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分

// var search = function (nums, target) {
//   // 时间复杂度：O(logn)
//   // 空间复杂度：O(1)
//   // [6,7,8,1,2,3,4,5]
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     const mid = start + ((end - start) >> 1);
//     if (nums[mid] === target) return mid;
//     // [start, mid]有序
//     if (nums[mid] >= nums[start]) {
//       //target 在 [start, mid] 之间

//       if (target >= nums[start] && target <= nums[mid]) {
//         end = mid - 1;
//       } else {
//         //target 不在 [start, mid] 之间
//         start = mid + 1;
//       }
//     } else {
//       // [mid, end]有序

//       // target 在 [mid, end] 之间
//       if (target >= nums[mid] && target <= nums[end]) {
//         start = mid + 1;
//       } else {
//         // target 不在 [mid, end] 之间
//         end = mid - 1;
//       }
//     }
//   }
//   return -1;
// };

var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      //left order
      if (nums[mid] < target) {
        l = mid + 1;
      } else if (nums[l] <= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      //right order
      if (nums[mid] > target) {
        r = mid - 1;
      } else if (nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
