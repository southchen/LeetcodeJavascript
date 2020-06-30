/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
//BFS
/**
 * 遇到 1 就计数 +1 ，开始 BFS 沉岛
维护一个队列，遇到 1 就让它的坐标入列
节点出列，并考察四个方向，如果是 1 ，将它转为 0 ，并将节点入列
如果越界了或遇到 0 ，则跳过，不用转 0
一层层的出列入列，直到没有可以入列的节点，则当前岛屿的所有 1 都转 0 了
 */
// const numIslands = (grid) => {
//   let count = 0;
//   let queue = [];
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === '1') {
//         count++;
//         grid[i][j] = '0'; // 做标记，避免重复遍历
//         queue.push([i, j]);
//         turnZero(queue, grid);
//       }
//     }
//   }
//   return count;
// };
// function turnZero(queue, grid) {
//   const dirs = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
//   ];
//   while (queue.length) {
//     const cur = queue.shift();
//     for (const dir of dirs) {
//       const x = cur[0] + dir[0];
//       const y = cur[1] + dir[1];
//       if (
//         x < 0 ||
//         x >= grid.length ||
//         y < 0 ||
//         y >= grid[0].length ||
//         grid[x][y] !== '1'
//       ) {
//         continue;
//       }
//       grid[x][y] = '0';
//       queue.push([x, y]);
//     }
//   }
// }
//DFS
/**
 * DFS，从当前 1 为入口
DFS 做的事情：沉岛，边界外不用沉，0不用沉
将当前的 1 变 0
将当前坐标的上下左右都递归 DFS ，即都变 0 ，并且会继续深度 dfs
同处一个岛的 1 都变 0 了
dfs 出口：超出矩阵边界，或遇到 0 ，不用变 0
 */
const numIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};
function turnZero(i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === '0'
  )
    return;
  grid[i][j] = '0';
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
  turnZero(i + 1, j, grid);
  turnZero(i - 1, j, grid);
}

// @lc code=end
