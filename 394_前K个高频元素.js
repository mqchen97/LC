let res = []
let heap = []
let map = new Map()
for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
}
map.forEach((_, key) => {
    heap.push(key)
})
let len = heap.length
function swap(i, j) {
    let temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
}
function getMax(i) {
    let max = i
    let left = i * 2 + 1
    let right = i * 2 + 2
    if (left < len && map.get(heap[max]) < map.get(heap[left])) max = left
    if (right < len && map.get(heap[max]) < map.get(heap[right])) max = right
    if (max != i) {
        swap(i, max)
        getMax(max)
    }
}
function buildmaxHeap() {
    for (let i = len >> 1; i >= 0; i--) {
        getMax(i)
    }
}

buildmaxHeap()

for (let i = 0; i < k; i++) {
    res.push(heap[0])
    swap(0, len - 1)
    len--
    getMax(0)
}
return res