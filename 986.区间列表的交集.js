/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let i = 0,
    j = 0;
  let res = [];
  while (i < A.length && j < B.length) {
    let [a1, a2] = A[i],
      [b1, b2] = B[j];
    //有交集
    if (a2 >= b1 && b2 >= a1) {
      //起始点
      let start = Math.max(a1, b1);
      let end = Math.min(a2, b2);
      res.push([start, end]);
    }
    if (a2 > b2) {
      j++;
    } else {
      i++;
    }
  }
  return res;
};
// @lc code=end
