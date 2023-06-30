/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    //交换节点
    function swap(i, max) {
        let temp = nums[i]
        nums[i] = nums[max]
        nums[max] = temp
    }
    //调整大根堆
    function maxHeapify(index, len) {
        let max = index
        //因为下标从0开始，所以左右孩子的下标需+1
        let left = index * 2 + 1
        let right = index * 2 + 2
        //判断边界并记录最大的节点下标
        if (left < len && nums[left] > nums[max]) {
            max = left
        }
        if (right < len && nums[right] > nums[max]) {
            max = right
        }
        //递归调整大根堆
        if (max != index) {
            swap(index, max)
            maxHeapify(max, len)
        }
    }
    //建立大根堆
    function buildMaxHeap(len) {
        for (let i = len >> 2 - 1; i >= 0; i--) {
            maxHeapify(i, len)
        }
    }
    //执行代码，时间复杂度复杂度n*logk
    let heapsize = nums.length
    buildMaxHeap(heapsize)
    for (let i = 0; i < k; i++) {
        swap(0, heapsize - 1)
        heapsize--
        maxHeapify(0, heapsize)
    }
    return nums[nums.length - k]
};