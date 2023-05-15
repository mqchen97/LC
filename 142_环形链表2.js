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
    let fast = head
    let slow = head
    if (fast) {
        fast = fast?.next?.next
        slow = slow.next
    }
    while (fast && fast !== slow) {
        fast = fast?.next?.next
        slow = slow.next
    }
    if (!fast) return null
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
};