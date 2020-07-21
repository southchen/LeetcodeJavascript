/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
找出单调递增的左边界
对比nums[r]的原因：
左值 < 中值, 中值 < 右值 ：没有旋转，最小值在最左边，可以收缩右边界

        右
     中
 左
左值 > 中值, 中值 < 右值 ：有旋转，最小值在左半边，可以收缩右边界

 左       
         右
     中
左值 < 中值, 中值 > 右值 ：有旋转，最小值在右半边，可以收缩左边界

     中  
 左 
         右
左《中《右。不存在
左
    中  
        右

*/
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = (r + l) >> 1;
    //compare to right pointer
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  //when exist loop l===r
  //r points to the last element, if nums[r]==target, can be found
  return nums[l];
};

// @lc code=end
