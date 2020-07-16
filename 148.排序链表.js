/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  //base case
  if (!head || !head.next) return head;
  if (!head.next.next) {
    if (head.val < head.next.val) return head;
    let next = head.next;
    next.next = head;
    head.next = null;
    return next;
  }
  //split
  let slow = head,
    pre = new ListNode(-1),
    fast = head.next.next;
  while (fast) {
    pre = slow;
    slow = slow.next;
    fast = fast.next;
  }
  pre.next = null;

  //recu
  let sortedLeft = sortList(head);
  let sortedRight = sortList(slow);
  //merge
  function merge(leftHead, rightHead) {
    let dummy = new ListNode(-1),
      pre = dummy;
    while (rightHead && leftHead) {
      if (leftHead.val >= rightHead.val) {
        pre.next = rightHead;
        rightHead = rightHead.next;
      } else {
        pre.next = leftHead;
        leftHead = leftHead.next;
      }
      pre = pre.next;
    }
    if (leftHead) pre.next = leftHead;
    if (rightHead) pre.next = rightHead;

    return dummy.next;
  }
  return merge(sortedLeft, sortedRight);
};
//iteration
var sortList = function (head) {
  // 哨兵节点
  let preHead = new ListNode(0);
  preHead.next = head;
  // 求链表长度
  let n = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    n++;
  }
  // 分割i长度的链表，返回剩余的链表
  let split = (node, i) => {
    while (i != 1 && node) {
      node = node.next;
      i--;
    }
    let rest = node ? node.next : null;
    if (node) node.next = null;
    return rest;
  };
  // 合并
  let merge = (left, right, pre) => {
    let curr = pre;
    while (left && right) {
      if (left.val <= right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }
    curr.next = left || right;
    while (curr.next) curr = curr.next;
    return curr;
  };
  // 合并 2*i 个
  for (let i = 1; i < n; i *= 2) {
    let pre = preHead;
    let curr = preHead.next;
    // 分割左右两部分链表，并合并
    while (curr) {
      let left = curr;
      let right = split(left, i);
      curr = split(right, i);
      pre = merge(left, right, pre);
    }
  }
  return preHead.next;
};

// @lc code=end
