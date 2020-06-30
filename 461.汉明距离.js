/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/**
 * & : 按二进制位进行 与运算，相同位同时为 1 时结果为 1，否则为 0
 * | : 按二进制位进行 或运算，相同位有一个为 1 时结果为 1，否则为 0
 * ^ : 按二进制位进行 异或运算，相同位相同时结果为 0，否则为 1
 * >> : 右移运算是将一个二进制位的操作数按指定移动的位数向右移动，移出位被丢弃，左边移出的空位或者一律补 0
 * << : 左移运算是将一个二进制位的操作数按指定移动的位数向左移位，移出位被丢弃，右边的空位一律补 0
 */
var hammingDistance = function (x, y) {
  let ans = 0;
  while (x !== 0 || y !== 0) {
    if ((x & 1) !== (y & 1)) {
      ans++;
    }
    x >>= 1;
    y >>= 1;
  }
  return ans;
};

// @lc code=end
