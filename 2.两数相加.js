/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  let temp = 0,
    dummy = new ListNode(-1),
    cur = dummy,
    p1 = l1,
    p2 = l2;
  while (p1 !== null || p2 !== null) {
    let v1 = p1 == null ? 0 : p1.val;
    let v2 = p2 == null ? 0 : p2.val;
    let sum = v1 + v2 + temp;
    cur.next = new ListNode(sum % 10);
    temp = Math.floor(sum / 10);
    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
    cur = cur.next;
  }
  if (temp === 1) cur.next = new ListNode(temp);
  return dummy.next;
};
// @lc code=end
