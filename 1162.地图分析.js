/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
//多源BFS
var maxDistance = function (grid) {
  let [queue_1, maxDistance] = [[], -1];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) queue_1.push([i, j]);
    }
  }
  if (queue_1.length == (0 || grid.length * grid[0].length)) return -1;
  while (queue_1.length != 0) {
    let len = queue_1.length;
    for (let k = 0; k < len; k++) {
      let [i1, j1] = queue_1.shift();
      if (i1 > 0 && grid[i1 - 1][j1] == 0) {
        grid[i1 - 1][j1] = 1;
        queue_1.push([i1 - 1, j1]);
      }
      if (i1 < grid.length - 1 && grid[i1 + 1][j1] == 0) {
        grid[i1 + 1][j1] = 1;
        queue_1.push([i1 + 1, j1]);
      }
      if (j1 > 0 && grid[i1][j1 - 1] == 0) {
        grid[i1][j1 - 1] = 1;
        queue_1.push([i1, j1 - 1]);
      }
      if (j1 < grid[0].length - 1 && grid[i1][j1 + 1] == 0) {
        grid[i1][j1 + 1] = 1;
        queue_1.push([i1, j1 + 1]);
      }
    }
    maxDistance++;
  }
  return maxDistance;
};

// @lc code=end
