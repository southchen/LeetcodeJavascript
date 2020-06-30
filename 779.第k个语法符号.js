/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// var kthGrammar = function (N, K) {
//   let res = ['0'];
//   const recursion = (preRow, count) => {
//     let arr = [];
//     if (count === N - 1) return;
//     count++;
//     for (let char of preRow) {
//       if (char == '0') arr.push('01');
//       if (char == '1') arr.push('10');
//     }
//     arr = arr.join('');
//     res.push(arr);

//     recursion(res[count], count);
//   };
//   recursion('0', 0);

//   return res[N - 1][K - 1];
// };
/**
 * 
 *第 K 个数字是上一行第 (K+1) / 2 个数字生成的。
 如果上一行的数字为 0，被生成的数字为 1 - (K%2)，
 如果上一行的数字为 1，被生成的数字为 K%2。
 */
var kthGrammar = function (N, K) {
  if (N === 1) return 0;
  if (K % 2) return kthGrammar(N - 1, Math.floor(K / 2) + 1);
  //当k为偶数时，上一行为1这这一行为0
  return kthGrammar(N - 1, K / 2) === 1 ? 0 : 1;
};
// @lc code=end
