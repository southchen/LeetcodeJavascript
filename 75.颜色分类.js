/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**头尾指针分别表示0的右边界和2的左边界
如果当前元素等于0，和头指针元素互换
等于2，和尾指针元素互换

1.创建c0=0,c1=0,c2=nums.length-1，三个指针
2.假如c0===0，则nums[c0]和nums[c1]位置替换, c0++,c1++
3.假如c0===2，则nums[c2]和nums[c1]位置替换, c2--
4.否则c1++

*/
var sortColors = function (nums) {
  let i = 0,
    j = nums.length - 1,
    cur = 0;
  while (i <= j) {
    if (nums[i] === 0) {
      [nums[i], nums[cur]] = [nums[cur], nums[i]];
      i++;
      cur++;
    } else if (nums[i] === 2) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j--;
    } else {
      i++;
    }
  }
};

// var sortColors = function (nums) {
//   let count = [0, 0, 0];
//   for (let num of nums) {
//     count[num] += 1;
//   }
//   for (let i = 0, j = 0; i < 3; i++) {
//     while (count[i]) {
// count[i]--;
//       nums[j] = i;
// j++
//     }
//   }
// };

// @lc code=end
