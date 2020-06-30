/*
 * @lc app=leetcode.cn id=932 lang=javascript
 *
 * [932] 漂亮数组
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number[]}
 */
/**1，利用题目给出的条件： A[k]*2=A[i]+A[j]--->先看左边，A[k]*2 永远为偶数；而右边，在A[i]为偶数的情况下，若A[j]是奇数，则等式永远不成立； 因为：奇+偶=奇
2，利用分治递归思想，假设每次递归都会得到一个漂亮数组，先挨个遍历该数组中的元素---》将该数组中指定（元素*2）可以得到一个偶数；---》将指定（元素*2-1）可以得到一个奇数；
3，新建一个数组；将2里遍历得到的奇数全放到数组左边，得到的偶数全放到右边；则可以得到一个新的漂亮数组；
4，原理：先设一个漂亮数组，假设为[A,B,C]，则[A*X+Y,B*X+Y,C*X+Y]也一定是漂亮数组；所以将得到的奇数排一起成为一组一定是漂亮数组（因为符合条件：2*A-1）；偶数组同样理由也是个漂亮数组，而奇偶组之间又因为符合1的设定，也一定是漂亮数组，则如此（奇数组，偶数组）排列的数组整体也是一个漂亮数组；
5，设置分治-递归逻辑；即每次都把给定数字N，分为2组；因为给定的数可能是偶数也可能是奇数； 而从1开始的序列数组，N为奇数情况下，奇数数量永远比偶数数量大1；所以将数组分两半的时候，奇数应该分为 (N+1)/2 个，偶数为（N/2）个，
6，利用递归传递下去，实际上不用像2中那样奇数偶数都用一个递归的来的数组来建立，那样就是暴力法，而是要用分治思想，每次按5一样分两组，奇偶分别用不同的组来完成；
7，分别遍历BeautifulArray（（N+1）/2）；BeautifulArray（N/2）得到的漂亮数组，左边用上面原理将BeautifulArray（（N+1）/2）得到的数组（2*item-1）全做成奇数；右边将BeautifulArray（N/2）得到的漂亮数组全做成偶数；
8，将得到结果放入字典即可； */
var beautifulArray = function (N) {
  //base
  if (N <= 1) return [1];
  //init
  let mid = N % 2 === 0 ? N / 2 : Math.floor(N / 2) + 1;
  //recursion function
  let left = beautifulArray(mid);
  let right = beautifulArray(N - mid);

  //combination
  const merge = (left, right) => {
    for (let i = 0; i < left.length; i++) {
      left[i] = 2 * left[i];
      left[i] -= 1;
    }
    for (let j = 0; j < right.length; j++) {
      right[j] = 2 * right[j];
    }
    return [...left, ...right];
  };
  return merge(left, right);
};
// @lc code=end
