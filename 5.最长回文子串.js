/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//动态规划
/**
 * 如果一个字符串是回文串，那么在它左右分别加上一个相同的字符，那么它一定还是一个回文串
 * 状态转移方程
 * if (s[i] === s[j] && dp[i + 1][j - 1]) {
  dp[i][j] = true;
}
特殊情况
j - i < 2：意即子串是一个长度为0或1的回文串
dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)
 */

var longestPalindrome = function (s) {
  let n = s.length;
  let res = '';
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      //2 cases：左边和右边相等，且
      //1：i,j相邻
      //2:或中间的部分也是回文的
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      //更新答案 当前为true且i和j距离大于前一个答案的长度
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

/**
 * 
中心扩展

 */
var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s;
  }
  let start = 0,
    end = 0;
  let n = s.length;
  // 中心扩展法
  let centerExpend = (left, right) => {
    while (left >= 0 && right < n && s[left] == s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };
  for (let i = 0; i < n; i++) {
    let len1 = centerExpend(i, i);
    let len2 = centerExpend(i, i + 1);
    // 两种组合取最大回文串的长度
    let maxLen = Math.max(len1, len2);
    if (maxLen > end - start) {
      // 更新最大回文串的首尾字符索引
      start = i - ((maxLen - 1) >> 1);
      end = i + (maxLen >> 1);
    }
  }
  return s.substring(start, end + 1);
};
// @lc code=end
