/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
时间复杂度：O(n)O(n)
//贪心？？⬆️
 */

//动态规划
//遍历，遇到新数字num，要么加上它sum+=num，要么放弃之前的数，重设和为num，sum=num
/***
 * 首先我们可以确定的是nums数组长度只有1的时候，那最大值就为nums[0],
 * 那再添加一位的时候，那最大值就是Math.max(nums[0]+nums[1],nums[0]),
 * 所以以此类推，我们声明一个保存每一位最大值的数组，然后返回这个数组的最大值,就是nums的最大子序和
 */
var maxSubArray = function (nums) {
  var dp = [];
  dp[0] = nums[0];
  var max = dp[0];
  for (var i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
};

/**
 * 
 *方法二：分治
思路和算法

这个分治方法类似于「线段树求解 LCIS 问题」的 pushUp 操作。 也许读者还没有接触过线段树，没有关系，方法二的内容假设你没有任何线段树的基础。当然，如果读者有兴趣的话，推荐看一看线段树区间合并法解决 多次询问 的「区间最长连续上升序列问题」和「区间最大子段和问题」，还是非常有趣的。

我们定义一个操作 get(a, l, r) 表示查询 aa 序列 [l, r][l,r] 区间内的最大子段和，那么最终我们要求的答案就是 get(nums, 0, nums.size() - 1)。如何分治实现这个操作呢？对于一个区间 [l, r][l,r]，我们取 m = \lfloor \frac{l + r}{2} \rfloorm=⌊ 
2
l+r
​	
 ⌋，对区间 [l, m][l,m] 和 [m + 1, r][m+1,r] 分治求解。当递归逐层深入直到区间长度缩小为 11 的时候，递归「开始回升」。这个时候我们考虑如何通过 [l, m][l,m] 区间的信息和 [m + 1, r][m+1,r] 区间的信息合并成区间 [l, r][l,r] 的信息。最关键的两个问题是：

我们要维护区间的哪些信息呢？
我们如何合并这些信息呢？
对于一个区间 [l, r][l,r]，我们可以维护四个量：

lSum 表示 [l, r][l,r] 内以 ll 为左端点的最大子段和
rSum 表示 [l, r][l,r] 内以 rr 为右端点的最大子段和
mSum 表示 [l, r][l,r] 内的最大子段和
iSum 表示 [l, r][l,r] 的区间和
以下简称 [l, m][l,m] 为 [l, r][l,r] 的「左子区间」，[m + 1, r][m+1,r] 为 [l, r][l,r] 的「右子区间」。我们考虑如何维护这些量呢（如何通过左右子区间的信息合并得到 [l, r][l,r] 的信息）？对于长度为 11 的区间 [i, i][i,i]，四个量的值都和 a_ia 
i
​	
  相等。对于长度大于 11 的区间：

首先最好维护的是 iSum，区间 [l, r][l,r] 的 iSum 就等于「左子区间」的 iSum 加上「右子区间」的 iSum。
对于 [l, r][l,r] 的 lSum，存在两种可能，它要么等于「左子区间」的 lSum，要么等于「左子区间」的 iSum 加上「右子区间」的 lSum，二者取大。
对于 [l, r][l,r] 的 rSum，同理，它要么等于「右子区间」的 rSum，要么等于「右子区间」的 iSum 加上「左子区间」的 rSum，二者取大。
当计算好上面的三个量之后，就很好计算 [l, r][l,r] 的 mSum 了。我们可以考虑 [l, r][l,r] 的 mSum 对应的区间是否跨越 mm——它可能不跨越 mm，也就是说 [l, r][l,r] 的 mSum 可能是「左子区间」的 mSum 和 「右子区间」的 mSum 中的一个；它也可能跨越 mm，可能是「左子区间」的 rSum 和 「右子区间」的 lSum 求和。三者取大。

 */
var maxSubArray = function (nums) {
  //base case
  if (nums.length == 1) return nums[0];
  //split
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid, nums.length);
  //rec
  return combine(maxSubArray(left), maxSubArray(right));
  function combine(lSum, rSum) {
    let leftMax = -Number.MAX_SAFE_INTEGER;
    let rightMax = -Number.MAX_SAFE_INTEGER;
    let ltorSum = 0,
      rtolSum = 0;
    for (let i = left.length - 1; i >= 0; i--) {
      ltorSum += left[i];

      leftMax = Math.max(leftMax, ltorSum);
    }
    for (let j = 0; j < right.length; j++) {
      rtolSum += right[j];
      rightMax = Math.max(rightMax, rtolSum);
    }
    let crossSum = leftMax + rightMax;
    return Math.max(crossSum, lSum, rSum);
  }
};
// @lc code=end
