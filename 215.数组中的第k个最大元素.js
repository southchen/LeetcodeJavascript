/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * quickselect
 * 不需要一个排序的数组，只要 n - k 的左边是小于 nums[n-k] 的值，
 * n - k 的右边是大于 nums[n-k] 的值，那么 n - k 就是我们要找的 Top k。
 * 所以问题转化为如何切割左右数组，并找到 Top k 对应的 pivot。
 * pivot 的选择很重要，如果对于一个已排序的数组，我们每次都选择最大/最小的值为 pivot，那么时间复杂度为 O(N^2) 。
 * 每次通过 random 选择 pivot 可以尽量避免最坏情况发生。
 * */
// const findKthLargest = (nums, k) => {
//   return quickSelect(nums, 0, nums.length - 1, k);
// };

// const quickSelect = (nums, lo, hi, k) => {
//   // 避免最坏情况发生
//   const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
//   swap(nums, p, hi);
//   let i = lo;
//   let j = lo;
//   while (j < hi) {
//     if (nums[j] <= nums[hi]) {
//       swap(nums, i++, j);
//     }
//     j++;
//   }
//   swap(nums, i, j);
//   if (hi === k + i - 1) return nums[i];
//   // Top k 在右边
//   if (hi > k + i - 1) return quickSelect(nums, i + 1, hi, k);
//   // Top k 在左边
//   return quickSelect(nums, lo, i - 1, k - (hi - i + 1));
// };

// const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
//version2:
var findKthLargest = function (nums, k) {
  var left = 0;
  var right = nums.length - 1;
  return quickSelect(nums, left, right, k);
};

function quickSelect(nums, left, right, k) {
  if (nums.length <= 1) return nums[0];
  let random = Math.floor(Math.random() * (right - left + 1) + left);
  let pivot = nums[random];
  [nums[random], nums[right]] = [nums[right], nums[random]];
  let j = left,
    i = left;
  while (j < right) {
    if (nums[j] <= pivot) {
      [nums[j], nums[i]] = [nums[i], nums[j]];

      i++;
      j++;
    } else {
      j++;
    }
  }
  [nums[j], nums[i]] = [nums[i], nums[j]];

  if (i === right + 1 - k) return nums[i];
  if (i < right + 1 - k) {
    return quickSelect(nums, i + 1, right, k);
  } else {
    return quickSelect(nums, left, i - 1, k - right + i - 1);
  }
}
/****heap
 * 思路是创建一个大顶堆，将所有数组中的元素加入堆中，并保持堆的大小小于等于 k。这样，堆中就保留了前 k 个最大的元素。这样，堆顶的元素就是正确答案。
 * 像大小为 k 的堆中添加元素的时间复杂度为 {O}(\log k)O(logk)，我们将重复该操作 N 次，故总时间复杂度为 {O}(N \log k)O(Nlogk)。
 * 在 Python 的 heapq 库中有一个 nlargest 方法，具有同样的时间复杂度，能将代码简化到只有一行。
 * 本方法优化了时间复杂度，但需要 {O}(k)O(k) 的空间复杂度。
 */
// @lc code=end
