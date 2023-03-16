/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const dummyHead = new ListNode()
    dummyHead.next = head
    let slow = dummyHead
    let fast = dummyHead
    //将快节点向前移动N个
    while (n--) {
        fast = fast.next
    }
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    let node = slow.next
    slow.next = node.next
    return dummyHead.next
};