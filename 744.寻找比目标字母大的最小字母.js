/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
//大于最右边的值或者小于最左边的值，都返回左边的值
//二分查找分几轮进行，在每一轮中我们保持循环始终在区间 [lo，hi]。让 mi = (lo + hi) / 2。若 letters[mi] <= target，则我们修改查找区间为 [mi + 1, hi]，否则，我们修改为 [lo, mi]
//最后，如果插入位置是最后一个位置 letters.length，则返回 letters[0]。这就是模运算的运用。
var nextGreatestLetter = function (letters, target) {
  let l = 0,
    r = letters.length;
  while (l < r) {
    let mid = (l + r) >> 1;
    //find the rihgt edge of targets
    if (letters[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  //return letters[left % letters.length];
  return l > letters.length ? letters[0] : letters[l];
};

// @lc code=end
