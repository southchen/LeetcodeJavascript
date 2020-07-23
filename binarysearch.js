var binaryLeft = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] === target) {
      right = mid;
    }
  }
  if (
    // left >= nums.length||
    nums[left] != target
  ) {
    return -1;
  }
  return left;
};
var binaryLeft = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      right = mid - 1;
    }
  }
  //patch
  if (nums[left] != target) {
    return -1;
  }
  return left;
};
//console.log('result' + binaryLeft([2, 2, 3, 3, 4], 1));
/*****right */
// var binaryRight = function (nums, target) {
//   let left = 0,
//     right = nums.length;
//   while (left < right) {
//     let mid = left + ((right - left) >> 1);
//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid;
//     } else if (nums[mid] === target) {
//       left = mid + 1;
//     }
//   }
//   if (left >= nums.length) return -1;
//   return left - 1;
// };
var binaryRight = function (nums, target) {
  let left = 0,
    //right would never exceed length range
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      left = mid + 1;
    }
  }
  console.log(left, right);
  if (right < 0 || nums[right] != target) return -1;
  return right;
};
//console.log(binaryRight([2, 2, 3, 3, 4], 1));
