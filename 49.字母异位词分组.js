/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//hash table with map
var groupAnagrams = function (strs) {
  let hash = new Map();
  strs.forEach((str) => {
    let temp = str.split('').sort().join('');
    if (hash.has(temp)) {
      let arr = hash.get(temp);

      arr.push(str);
      hash.set(temp, arr);
    } else {
      hash.set(temp, [str]);
    }
  });
  return [...hash.values()];
};
// @lc code=end
