/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // if(lists.length === 0) return null
    // //两两比较合并
    // function mergeTwoLists(l1,l2){
    //     if(l1 == null) return l2
    //     if(l2 == null) return l1
    //     if(l1.val <= l2.val){
    //         l1.next = mergeTwoLists(l1.next,l2)
    //         return l1
    //     }else{
    //         l2.next = mergeTwoLists(l1,l2.next)
    //         return l2
    //     }
    // } 
    // //分治递归，不断平分，然后向上合并
    // function merge(i,j){
    //     if(i === j) return lists[i]
    //     let mid = (i+j) >> 1
    //     let l1 = merge(i,mid)
    //     let l2 = merge(mid+1,j)
    //     return mergeTwoLists(l1,l2)
    // }
    // return merge(0,lists.length-1)
    let len = 0
    function swap(i, j, heap) {
        if (i === j) return;
        let temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp

    }
    function buildMinHeap(heap) {
        for (let i = len >> 1; i >= 0; i--) {
            getMinElem(i, len, heap)
        }
    }

    function getMinElem(i, len, heap) {
        let min = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if (left < len && heap[min].val > heap[left].val) {
            min = left
        }
        if (right < len && heap[min].val > heap[right].val) {
            min = right
        }
        if (min !== i) {
            swap(i, min, heap)
            getMinElem(min, len, heap)
        }
    }

    const heap = []

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heap.push(lists[i])
            len++
        }
    }

    if (heap.length == 0) return null
    if (heap.length == 1) return heap[0]

    buildMinHeap(heap)
    const res = new ListNode()
    let cur = res
    while (heap[0]) {
        cur.next = heap[0]
        cur = cur.next
        heap[0] = heap[0].next
        if (heap[0] === null) {
            swap(0, len - 1, heap)
            len--
        }
        getMinElem(0, len, heap)
    }
    return res.next
};