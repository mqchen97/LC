/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let cur = head
    let count = 0
    //判断当前子链是否需要反转
    while (cur && count < k) {
        cur = cur.next
        count++
    }
    //如果需要反转，递归反转
    if (count === k) {
        //先递归后续链表
        cur = reverseKGroup(cur, k)
        //得到后续头节点后，反转当前链表
        while (count > 0) {
            let next = head.next
            head.next = cur
            cur = head
            head = next
            count--
        }
        //重新获取头节点
        head = cur
    }
    //返回当前链表头节点
    return head
};