/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/**既然使用的是twoPointers的思路，那么我们需要分别从数组的最前面和最后面开始，这两个指针是互不影响，都是各走各的，但是如何确定当前指针走过的地方能存放多少雨水量呢？

这个时候，我们就需要两块挡板leftMax和rightMax，这两块挡板最开始都是挡在最外面的墙边，随着两个指针前进，leftMax代表的是left走过的路中最高的墙，rightMax同理。

那么如何计算雨水量呢？

比较左右两个挡板的高度，然后根据两个挡板各自的指针配合计算。

如果左边挡板的高度小于右边的挡板高度，那么左边指针之前的雨水量取决于leftMax和height[left]的大小关系，如果前者大于后者，那么容量等与前者减去后者；反之，容量为0（可以参考解法一中的图来理解）
如果左边挡板的高度大于等于右边挡板的高度，与上一种情况基本相同，只不过是求的右边的雨水量。
在每次移动指针之后，我们要将挡板更新到最大值。 */
var trap = function (height) {
  if (height.length === 0) return 0;
  let sum = 0;
  for (let cur = 0; cur < height.length; cur++) {
    let lMax = 0,
      rMax = 0;
    for (let l = cur - 1; l >= 0; l--) {
      lMax = height[l] > lMax ? height[l] : lMax;
    }
    for (let r = cur + 1; r < height.length; r++) {
      rMax = height[r] > rMax ? height[r] : rMax;
    }
    let min = Math.min(rMax, lMax);
    if (min > height[cur]) {
      sum += min - height[cur];
    }
  }
  return sum;
};
/**
 * 栈：我们在遍历数组时维护一个栈。
 * 如果当前的条形块小于或等于栈顶的条形块，我们将条形块的索引入栈，
 * 意思是当前的条形块被栈中的前一个条形块界定。
 * 如果我们发现一个条形块长于栈顶，我们可以确定栈顶的条形块被当前条形块和栈的前一个条形块界定，
 * 因此我们可以弹出栈顶元素并且累加答案到total。
 */
var trap = function (height) {
  let stack = [],
    current = 0,
    total = 0;
  while (current < height.length) {
    while (stack.length && height[current] > height[stack[stack.length - 1]]) {
      let top = stack[stack.length - 1];
      stack.pop();
      if (!stack.length) break;
      let width = current - stack[stack.length - 1] - 1;
      let ht =
        Math.min(height[current], height[stack[stack.length - 1]]) -
        height[top];
      total += width * ht;
    }
    stack.push(current++);
  }
  return total;
};

// @lc code=end
