/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //map来记录出现过的值, 一旦再次出现就说明是无限循环了
  let map = {};
  const recursion = (n) => {
    let nums = n
      .toString()
      .split('')
      .map((num) => Number(num));
    let sum = nums.reduce((cur, next) => {
      return (cur += next * next);
    }, 0);
    if (sum === 1) return true;
    if (map[sum]) return false;
    map[sum] = 1;
    return recursion(sum);
  };

  return recursion(n);
};
//
var isHappy = function (n) {
  let slowPointer = n;
  let fastPointer = n;
  function getBitSquareSum(n) {
    let sum = 0;
    while (n !== 0) {
      const bit = n % 10;
      sum += bit * bit;
      n = parseInt(n / 10);
    }
    return sum;
  }
  do {
    //慢指针🐢获取一次每位的平方和, 快指针🐰获取两次每位的平方和, 当两个指针值一样时判断其是否为1
    slowPointer = getBitSquareSum(slowPointer);
    fastPointer = getBitSquareSum(getBitSquareSum(fastPointer));
  } while (slowPointer !== fastPointer);
  return slowPointer === 1;
};

// @lc code=end
