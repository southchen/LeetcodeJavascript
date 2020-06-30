/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
/**遍历整个数组，如果栈不空，且当前数字大于栈顶元素，那么如果直接入栈的话就不是 递减栈 ，
 * 所以需要取出栈顶元素，由于当前数字大于栈顶元素的数字，而且一定是第一个大于栈顶元素的数，直接求出下标差就是二者的距离。
继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止，然后将数字入栈，这样就可以一直保持递减栈，
且每个数字和第一个大于它的数的距离也可以算出来。 */
/**
 *
 * 遍历整个数组，如果栈不空，且当前数字大于栈顶元素，
 * 所以需要取出栈顶元素，由于当前数字大于栈顶元素的数字，而且一定是第一个大于栈顶元素的数，
 * 直接求出下标差就是二者的距离。
 * 继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止，然后将数字入栈，
 * 这样就可以一直保持递减栈，且每个数字和第一个大于它的数的距离也可以算出来。
 */
// var dailyTemperatures = function (T) {
//   let res = new Array(T.length).fill(0);
//   let stack = [];
//   for (let i = 0; i < T.length; i++) {
//     while (stack.length && T[i] > T[stack[stack.length - 1]]) {
//       let j = stack.pop();
//       res[j] = i - j;
//     }
//     stack.push(i);
//   }
//   return res;
// };
//stack 中存放下标，[stack[stack.length-1]]为栈顶，代表T中遍历到目前，最大数的下标
var dailyTemperatures = function (T) {
  let stack = [],
    res = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }
  return res;
};
// @lc code=end
