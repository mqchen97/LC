/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map()
    this.size = capacity
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyEnd = new ListNode()
    this.dummyHead.next = this.dummyEnd
    this.dummyEnd.pre = this.dummyHead
};

function ListNode(key, val) {
    this.key = key === undefined ? key : undefined
    this.val = val === undefined ? val : undefined
    this.pre = null
    this.next = null
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        this.removeNode(node)
        this.updateNode(node, this.dummyEnd)
        return node.val
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        this.removeNode(node)
        this.updateNode(node)
        node.val = value
    } else {
        if (this.count === this.size) {
            let node = this.dummyHead.next
            this.removeNode(node)
            this.map.delete(node.key)
        } else this.count++
        let newNode = new ListNode(key, value)
        this.map.set(key, newNode)
        this.updateNode(newNode)
    }
    return null
};

LRUCache.prototype.removeNode = function (node) {
    let temp1 = node.pre
    let temp2 = node.next
    temp1.next = temp2
    temp2.pre = temp1
}

LRUCache.prototype.updateNode = function (node) {
    node.pre = this.dummyEnd.pre
    node.next = this.dummyEnd
    this.dummyEnd.pre.next = node
    this.dummyEnd.pre = node
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2);
lRUCache.put(1, 0); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4