// var findMin = function (nums) {
//   let l = 0,
//     r = nums.length - 1;
//   while (l < r) {
//     let mid = (r + l) >> 1;
//     console.log(l, mid, r);
//     if (nums[mid] > nums[l]) {
//       l = mid + 1;
//     } else {
//       r = mid;
//     }
//   }
//   return nums[l + 1];
// };

// var findMin = function (nums) {
//   let l = 0,
//     r = nums.length - 1;
//   while (l < r) {
//     let mid = (r + l) >> 1;
//     if (nums[mid] > nums[r]) {
//       l = mid + 1;
//     } else {
//       r = mid;
//     }
//   }
//   return nums[l];
// };
/***❌❌❌❌l never equals r
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = (r + l) >> 1;
    if (nums[mid] > nums[l]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};**/
//[left,right] =>[left,mid,right]
//split [left,mid-1] mid [mid+1,right]
//return nums[right]=== nums[left]

//console.log(findMin([8, 1, 2, 3, 4]));

var searchLeftRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let resL;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  resL = r;
  return resL;
};

console.log(searchLeftRange([5, 7, 7, 8, 8, 10], 8));
var searchRightRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  let resR;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  resR = r;
  return resR;
};
//console.log(searchRightRange([5, 7, 7, 8, 8, 10], 8));
var isSubsequence = function (s, t) {
  let j = 0;
  let match = t.length;
  for (let c of t) {
    for (let i = j; i < s.length; i++) {
      if (s[i] === c) {
        j = i + 1;
        match--;
        break;
      }
    }
  }
  return match === 0 ? true : false;
};
let a = 'a';
let b = 'b';
// var nextGreatestLetter = function (letters, target) {
//   let l = 0,
//     r = letters.length;
//   while (l < r) {
//     let mid = (l + r) >> 1;

//     // if (letters[mid] == target) return letter[mid + 1];❌
//     //find the rihgt edge of targets
//     if (letters[mid] > target) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }
//   return l > letters.length ? letters[0] : letters[l];
// };
var nextGreatestLetter = function (letters, target) {
  let l = 0,
    r = letters.length;
  while (l < r) {
    let mid = (l + r) >> 1;
    //find the rihgt edge of targets
    if (letters[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  //if exceeds the length, return letters[0]
  return letters[l];
};
console.log(nextGreatestLetter(['a', 'g', 'h'], 'f'));
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
