/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
连续子数组可以表示为 [i,j]：从第 i 项到第 j 项
如果 [i,j] 的 sum >= s ，如果扩张窗口，条件依然满足，但更背离“最小长度”的要求
所以选择收缩窗口，i 右移，直到条件不再满足，所以这里是一个循环
在循环中，将窗口长度和全局的最小比较
如果窗口不再 sum >= s ，此时应该扩张窗口，j 右移，直到条件重新满足
**********
移动窗口的套路:
扩张窗口：找可行解，找到了就不再扩张
收缩窗口：在长度上优化该可行解，直到条件被破坏
寻找下一个可行解，然后再优化……
 */
var minSubArrayLen = function (s, nums) {};
// @lc code=end
