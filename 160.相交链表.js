/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**根据题目意思
如果两个链表相交，那么相交点之后的长度是相同的

我们需要做的事情是，让两个链表从同距离末尾同等距离的位置开始遍历。这个位置只能是较短链表的头结点位置。
为此，我们必须消除两个链表的长度差

指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
如果 pA 到了末尾，则 pA = headB 继续遍历
如果 pB 到了末尾，则 pB = headA 继续遍历
比较长的链表指针指向较短链表head时，长度差就消除了
如此，只需要将最短链表遍历两次即可找到位置 */

/**同步遍历 A、B 链表 pA 、 pB ，直到遍历完其中一个链表（短链表），如上图，设A为长链表
那么此时 A、B 两遍表的长度差就为 pA 到链尾的长度，此时可以把 pB 指向长链表的表头 headA ，继续同步遍历，直到遍历完长链表
此时，headA 到 pB 的长度就为两链表的长度差，pB 到链表的长度与 headB 到链尾的长度一致
此时，可将 pA 指向 headB ，然后同步遍历 pB 及 pA ，直到有相交节点，返回相交节点，否则返回 null
*/

var getIntersectionNode = function (headA, headB) {
  let pA = headA,
    pB = headB;
  while (pA || pB) {
    if (pA === pB) return pA;
    pA === null ? (pA = headB) : (pA = pA.next);
    pB === null ? (pB = headA) : (pB = pB.next);
  }
  return null;
};

// @lc code=end
