/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function (numRows) {
//   let res = [];
//   for (let i = 0; i < numRows; i++) {
//     let arr = [1];
//     if (i === 0) {
//       res.push(arr);
//     } else if (i === 1) {
//       arr.push(1);
//       res.push(arr);
//     } else {
//       for (let j = 0; j < i - 1; j++) {
//         arr.push(res[i - 1][j] + res[i - 1][j + 1]);
//       }
//       arr.push(1);
//       res.push(arr);
//     }
//   }
//   return res;
// };
var generate = function (numRows) {
  let res = [];
  if (numRows === 0) return res;
  res.push([1]);
  const recursion = (lastarr) => {
    if (lastarr.length < numRows) {
      let arr = [1];

      for (let i = 0; i < lastarr.length - 1; i++) {
        arr[i + 1] = lastarr[i] + lastarr[i + 1];
      }
      arr.push(1);
      res.push(arr);
      recursion(arr);
    }
  };
  recursion([1]);
  return res;
};
// @lc code=end
