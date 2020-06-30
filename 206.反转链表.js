/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
//迭代
// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let pre = null,
//     cur = head;
//   while (cur) {
//     let next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   head = pre;
//   return head;
// };
//递归
// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let next = head.next;
//   let reversedHead = reverseList(next);
//   head.next = null;
//   next.next = head;
//   return reversedHead;
// };
// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let cur = head,
//     next = head.next;
//   let reversedHead = reverseList(cur.next);
//   next.next = cur;
//   cur.next = null;
//   return reversedHead;
// };

var reverseList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let reversedHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHead;
};
// @lc code=end
