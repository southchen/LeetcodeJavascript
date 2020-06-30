/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// var isPalindrome = function(x) {

//   if(x<0) return false;
//   let flag = true;
//   x = x.toString()

//   for(let i=0, len=x.length; i<len/2; i++){
//       if(x[i] !== x[len-1-i]){
//           flag = false;
//           break
//       }
//   }
//   return flag
// };
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let left = 0;
  let right = 1;
  let sum = x;
  while (sum >= 1) {
    sum = sum / 10;
    left++;
  }

  function numAt(num, i) {
    return Math.floor((num % Math.pow(10, i)) / Math.pow(10, i - 1));
  }
  while (left > right) {
    if (numAt(x, left) !== numAt(x, right)) return false;
    left--;
    right++;
  }
  return true;
};
// @lc code=end
