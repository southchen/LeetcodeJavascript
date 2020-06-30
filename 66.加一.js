/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//failed at input of [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// var plusOne = function (digits) {
//   let number = digits.join('');
//   number = +number;
//   number++;
//   number = number.toString().split('');
//   return number;
// };
var plusOne = function (digits) {
  // 数值6145390195186705544超出Number基本类型的容纳范围，改用BigInt基本类型
  let num = BigInt(digits.join(''));
  // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
  let string = String(num + 1n);
  let ary = string.split('');

  return ary.map((str) => Number(str));
};
//
var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++; //每进入循环，该位置+1
    digits[i] %= 10; //✨
    //若无需进位，则得到答案，返回
    //若进位，i--,判断后一位
    if (digits[i] != 0) return digits;
  }
  //只有一种情况所有位数为9，eg. 99->100 之前所有都为0，再加上1
  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};

// @lc code=end
