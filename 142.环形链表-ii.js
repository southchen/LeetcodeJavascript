/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let f = head,
    s = head,
    p = head;
  while (f != null && f.next != null) {
    f = f.next.next;
    s = s.next;

    if (s === f) {
      while (p != s) {
        p = p.next;
        s = s.next;
      }
      return p;
    }
  }
  return null;
};
// @lc code=end
