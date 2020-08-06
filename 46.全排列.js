/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  //path路径
  let res = [];
  let dfs = function (path) {
    //判断是否到叶子节点，存下当前路径的所有值
    //结束条件，都被选过，path和nums一样长
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (num of nums) {
      //数组中未存在某个值，则将这个值存入path中，继续搜索下一层，最后恢复现场
      //选择列表，nums中没被选过的
      if (path.includes(num)) continue;
      //选择nums[i]
      path.push(num);
      //下一层决策树
      dfs(path);
      //取消选择，回溯，回到上一层，考察别的选择
      path.pop();
    }
  };

  dfs([]);
  return res;
};

// @lc code=end
