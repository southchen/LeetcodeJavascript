/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let map = [0, 1, 1];
  for (let i = 3; i <= N; i++) {
    map[i] = map[i - 2] + map[i - 1];
  }
  return map[N];
};
//动态规划优化：只需要存放前两个值即可，减小空间消耗

var fib = function (N) {
  if (N == 0) return 0;
  if (N == 2 || N == 1) return 1;
  var prev = 1,
    curr = 1;
  for (var i = 3; i <= N; i++) {
    var sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

// @lc code=end
