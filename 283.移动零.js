/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};
/**
 * 双指针 两次遍历
 * 创建两个指针i和j，第一次遍历的时候指针j用来记录当前有多少非0元素。即遍历的时候每遇到一个非0元素就将其往数组左边挪，第一次遍历完后，j指针的下标就指向了最后一个非0元素下标。
 * 第二次遍历的时候，起始位置就从j开始到结束，将剩下的这段区域内的元素全部置为0。
 */

/**
 * 双指针
 * 一次遍历
 * i 、 j 指针初始都指向索引 0
 * i 指针负责扫描整个数组，遇到了非0项，就与 j 指向的项交换，不管它是否为 0
 * 因此非 0 项被不断交换到数组的前部， 0 都跑到数组的最右
 */
// @lc code=end
