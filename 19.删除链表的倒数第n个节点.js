/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
//快指针j先走n步，再一起走，j走到null，此时的i就是要删除的节点！
//注意加上一个虚头结点再开始遍历，防止删除的元素为头结点
//然后链接前后节点
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let s = dummy;
  let f = dummy;
  while (n) {
    n--;
    f = f.next;
  }
  while (f.next) {
    f = f.next;
    s = s.next;
  }
  s.next = s.next.next;
  return dummy.next;
};
// @lc code=end
