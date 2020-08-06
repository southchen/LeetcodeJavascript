/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/**
 * 
 *  var arr=[]  //用来记录行节点 每行都存与arr数组中
  arr.push(root)
  while(arr.length>0){
    //你的操作    
    //本题是记录末位

    var len=arr.length
    while(len>0){
      var now=arr.shift()
      if(now.left!=null)
        arr.push(now.left)
      if(now.right!=null)
        arr.push(now.right)
      len--
    }
  }

 */

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    let length = queue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      arr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.push(arr);
  }
  return res;
};

/***
 * queue 初始时为 [root] ，代表第 1 层
开启 while 循环，对当前层的节点进行遍历
当前层的节点逐个出列，节点值推入 subRes 数组
判断如果当前出列节点有子节点，让子节点入列
本层的节点出列，下层的进来，下次循环时，queue 中全是新层的节点，没有旧层的节点
while 循环终止的条件是 queue 队列空了，节点遍历完了
 */
//递归+DFS
var levelOrder = function (root) {
  const res = [];
  function traversal(root, depth) {
    if (root !== null) {
      //新一层，建立该层数组
      if (!res[depth]) {
        res[depth] = [];
      }
      traversal(root.left, depth + 1);
      res[depth].push(root.val);
      traversal(root.right, depth + 1);
    }
  }
  traversal(root, 0);
  return res;
};
//不断的出队， 如果出队的是s，则表式这一层已经结束了，我们就继续push一个s。
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root, 's'];
  while (queue.length) {
    s;
    let arr = [];
    let cur = queue.shift();
    while (cur != 's') {
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      arr.push(cur.val);
      cur = queue.shift();
    }
    res.push(arr);
    if (queue.length > 0) queue.push('s');
  }
  return res;
};
// @lc code=end
