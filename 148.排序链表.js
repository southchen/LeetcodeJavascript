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
// @lc code=end
