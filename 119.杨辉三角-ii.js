/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//O(k)
//把前一行复制到新一行，向右移动一位，用0补上开头
// list[j] = list[j] + list[j + 1]
//更新每一个位，为该值加上后面一位，原地更改，从前往后

var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  let list = [1];
  for (let i = 0; i < rowIndex; i++) {
    list.unshift(0);
    for (let j = 0; j < i + 1; j++) {
      list[j] = list[j] + list[j + 1];
    }
  }
  return list;
};

// @lc code=end
