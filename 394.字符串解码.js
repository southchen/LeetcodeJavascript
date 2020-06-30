/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = []; // 倍数num的等待栈
  let strStack = []; // 待拼接的str的等待栈
  let num = 0; // 倍数的“搬运工”
  let result = ''; // 字符串的“搬运工”
  for (const char of s) {
    // 向右逐字符扫描
    if (!isNaN(char)) {
      // 遇到数字
      num = num * 10 + +char; // js中+可以将数字字符转为数字
    } else if (char === '[') {
      // 入栈的时机
      strStack.push(result); // result进入strStack栈等待
      result = ''; // 完成进栈后 清零
      numStack.push(num); // 倍数num进入栈等待
      num = 0; // 完成进栈后 清零
    } else if (char === ']') {
      // 出栈的时机，两个栈的栈顶出栈
      let repeatTimes = numStack.pop(); // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
    } else {
      // 遇到字母，追加给result串
      result += char;
    }
  }
  return result;
};
var decodeString = (s) => {
  let stack = [];
  for (const char of s) {
    if (char !== ']') {
      // ] 前的字符都入栈
      stack.push(char);
      continue;
    }
    let cur = stack.pop(); // 弹出一个来检测
    let str = ''; // 组装字符串
    // 接下来肯定是遇到字母，直到遇到 [
    while (cur !== '[') {
      str = cur + str; // cur字符加在左边
      cur = stack.pop(); // 再拉出一个
    }
    // 此时cur为 [，接下来要遇到数字
    let num = '';
    cur = stack.pop(); // 用下一个将 [ 覆盖
    while (!isNaN(cur)) {
      num = cur + num; // 数字字符加在左边
      cur = stack.pop(); // 再拉出一个
    }
    // 现在要么是字母，要么是 [
    stack.push(cur);
    stack.push(str.repeat(num));
  }
  return stack.join('');
};

// @lc code=end
