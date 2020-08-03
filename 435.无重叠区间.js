/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
//greedy
/**
 * 将区间按照结尾元素从小到大排序，循环区间集合，如果下一个区间开头元素比之前区间结尾元素大（或者相等），则它不是一个重合区间，
 * 最终用集合长度减去非重合区间数量，得到需要删除的重合区间数
 * **/

var eraseOverlapIntervals = function (intervals) {
  const len = intervals.length;
  if (len < 2) {
    return 0;
  }
  let count = 1; //非重合区间数目，init为1，肯定有一个
  let pre = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < len; i++) {
    if (intervals[i][0] >= intervals[pre][1]) {
      //前一个的右边界小于等于后一个左边界，非重合
      count++;
      pre = i; //update pre;
    }
    //如果重合，当前区间会被删掉，pre不更新，指向上一个不重合区间，
  }
  return len - count;
};
//dp：以当前区间为结尾，可以有多少个非重合区间
/**
 * 将区间按照开头元素从小到大排序，循环确定以当前区间为结尾，
 * 可以获得多少个非重合区间，最终用集合长度减去非重合区间数量，得到需要删除的重合区间数
 * **/
var eraseOverlapIntervals = function (intervals) {
  const len = intervals.length;
  if (len < 2) {
    return 0;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const res = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      res[i] = Math.max(
        res[i],
        intervals[i][0] >= intervals[j][1] ? res[j] + 1 : 0
      );
    }
  }
  res.sort((a, b) => b - a);
  return len - res[0];
};

// @lc code=end
