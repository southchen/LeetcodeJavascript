/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/**
 * 快速幂（Fast Power）
 * 假设我们已经得到了 x ^ n的结果，那么如何才能算出 x ^ {2 * n }
 * 显然，我们不需要再乘上 n 个 x。 使用公式 (x ^ n) ^ 2 = x ^ {2 * n }
 * 只需要一次计算,我们就可以得到 x ^ {2 * n } 这种优化可以降低算法的时间复杂度。
 * A=x^(n/2)
 * n为偶数 x^n = A*A
 * n为奇数 x^n = A*A*x
 */

/**
 * 奇次幂的话，幂次-1，转成偶次幂
 * 只需要写好偶次幂下的调用就好：myPow(num * num, power / 2)
 */
var myPow = (num, power) => {
  if (power < 0) return 1 / (num * myPow(num, -(power + 1)));
  if (power === 0) return 1;
  if (power === 1) return num;
  return power % 2 === 1
    ? num * myPow(num, power - 1)
    : myPow(num * num, power / 2);
};

/**
 * res 变量的值由奇次or偶次幂决定，如果是奇次幂，res 值为 num，反之，为1
 * res 最后乘上累乘后的 num，返回
 */
var myPow = function (num, power) {
  if (power < 0) return (1 / num) * myPow(1 / num, -(power + 1));
  if (power === 0) return 1;
  if (power === 1) return num;
  // 以上分别为power小于0 等于0 等于1 的情况
  let res = 1;
  while (power > 1) {
    // power大于1
    if (power % 2 === 1) {
      res = res * num;
      power--;
    }
    num = num * num;
    power = power / 2;
  }
  return res * num;
};

// @lc code=end
