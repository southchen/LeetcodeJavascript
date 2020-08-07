/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
//多源 BFS
//找所有的0，找到0后通过bfs一层一层向外遍历，找到1返回当前层数
var updateMatrix = function (matrix) {
  if (!matrix.length || !matrix[0].length) return null;

  let n = matrix.length;
  let m = matrix[0].length;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);

  let queue = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        ans[i][j] = 0;
        queue.push([i, j]);
      }
    }

  let dist = 0;
  while (queue.length) {
    let len = queue.length;
    dist++;
    for (let i = 0; i < len; i++) {
      let top = queue.shift();

      if (top[0] + 1 < n && ans[top[0] + 1][top[1]] === -1) {
        queue.push([top[0] + 1, top[1]]);
        ans[top[0] + 1][top[1]] = dist;
      }
      if (top[0] - 1 >= 0 && ans[top[0] - 1][top[1]] === -1) {
        queue.push([top[0] - 1, top[1]]);
        ans[top[0] - 1][top[1]] = dist;
      }
      if (top[1] + 1 < m && ans[top[0]][top[1] + 1] === -1) {
        queue.push([top[0], top[1] + 1]);
        ans[top[0]][top[1] + 1] = dist;
      }
      if (top[1] - 1 >= 0 && ans[top[0]][top[1] - 1] === -1) {
        queue.push([top[0], top[1] - 1]);
        ans[top[0]][top[1] - 1] = dist;
      }
    }
  }
  return ans;
};
//DP
//两次，一次从左上到右下，一次从右下到左上
var updateMatrix = function (matrix) {
  if (!matrix.length || !matrix[0].length) return null;

  let n = matrix.length;
  let m = matrix[0].length;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = new Array(m).fill(n + m);

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (matrix[i][j] === 0) ans[i][j] = 0;

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (i - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i - 1][j] + 1);
      if (j - 1 >= 0) ans[i][j] = Math.min(ans[i][j], ans[i][j - 1] + 1);
    }

  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) {
      if (i + 1 < n) ans[i][j] = Math.min(ans[i][j], ans[i + 1][j] + 1);
      if (j + 1 < m) ans[i][j] = Math.min(ans[i][j], ans[i][j + 1] + 1);
    }

  return ans;
};

// @lc code=end
