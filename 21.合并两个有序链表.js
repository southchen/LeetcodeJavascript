/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
//迭代 双指针
// var mergeTwoLists = function (l1, l2) {
//   const preHead = new ListNode(-1);
//   let p = preHead;
//   while (l1 != null && l2 != null) {
//     if (l1.val > l2.val) {
//       p.next = l2;
//       l2 = l2.next;
//     } else {
//       p.next = l1;
//       l1 = l1.next;
//     }
//     p = p.next;
//   }
//   if (l1 === null) p.next = l2;
//   if (l2 === null) p.next = l1;
//   return preHead.next;
// };

//递归
/**编程技巧：递归 + 原地斩链相连
递归比较查看两个链表哪个元素先小 就斩断此元素位置链条⛓️连接到另一链表上 如此也不需要另外开辟存储空间
斩断后 重连铁链的动作因为要自动非人工 所以需要程序自己调用自己 即为递归
斩断后需要连的结点 通过 return 最小结点 即动态更新 斩断结点位置
随时连接下一个符合要求的位置（x.next = 求下一个需要连接的结点位置(即程序自动搜索即递归) && x = 下一个需要连接的结点位置）
返回修改后的 l1头结点的链表 或 l2头结点的链表
 */
//确定边界条件： 当递归到任意链表为 null ，直接将 next 指向另外的链表即可，不需要继续递归了
// var mergeTwoLists = function (l1, l2) {
//   if (l1 == null) {
//     return l2;
//   }
//   if (l2 == null) {
//     return l1;
//   }
//   if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };
function mergeTwoLists(l1, l2) {
  //always compare two node
  if (l1 === null) {
    //if it reaches the end return the other node
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2); //let the next head point to the next result
    //pass the new head l1.next
    return l1; //return the smaller one
  } else {
    l2.next = mergeTwoLists(l2.next, l1); //pass the new head l2.next
    return l2;
  }
}

// @lc code=end
