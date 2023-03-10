/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let loop = 1
    const dummyHead = new ListNode()
    dummyHead.next = head
    let cur = head
    let len = 0
    while (cur) {
        len++
        cur = cur.next
    }
    while (loop <= len) {
        let pre = dummyHead, cur = pre.next
        while (cur) {
            let i = loop
            //计算链表1
            let l1 = cur
            while (cur && i > 0) {
                cur = cur.next
                i--
            }
            if (i > 0) break;
            //计算链表2
            let l2 = cur
            i = loop
            while (cur && i > 0) {
                cur = cur.next
                i--
            }
            let len1 = loop, len2 = loop - i
            //合并二有序链表
            while (len1 && len2) {
                if (l1.val <= l2.val) {
                    pre.next = l1
                    len1--
                    l1 = l1.next
                } else {
                    pre.next = l2
                    len2--
                    l2 = l2.next
                }
                pre = pre.next
            }
            //计算剩余有序链表
            while (len1) {
                pre.next = l1
                l1 = l1.next
                len1--
                pre = pre.next
            }
            while (len2) {
                pre.next = l2
                l2 = l2.next
                len2--
                pre = pre.next
            }
            pre.next = cur
        }
        loop *= 2
    }
    return dummyHead.next

    //递归但是空间复杂度不是O(1)
    // function mergeTwoList(l1, l2) {
    //     if (!l1) return l2
    //     if (!l2) return l1
    //     const dummyHead = new ListNode()
    //     let cur = dummyHead
    //     while (l1 && l2) {
    //         if (l1.val <= l2.val) {
    //             cur.next = l1
    //             cur = cur.next
    //             l1 = l1.next
    //         } else {
    //             cur.next = l2
    //             cur = cur.next
    //             l2 = l2.next
    //         }
    //     }
    //     if (l1) cur.next = l1
    //     if (l2) cur.next = l2
    //     return dummyHead.next
    // }

    // function merge(head) {
    //     if (!head || !head.next) return head;
    //     let pre, slow, fast
    //     slow = fast = head
    //     while (fast) {
    //         fast = fast?.next?.next
    //         pre = slow
    //         slow = slow.next
    //     }
    //     pre.next = null
    //     let l1 = merge(head)
    //     let l2 = merge(slow)
    //     return mergeTwoList(l1, l2)
    // }

    // return merge(head)
};