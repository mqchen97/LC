/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    const res = []
    if (!root) return res;
    //存放一层的节点
    const queue = []
    //存放一层的值
    let subRes = []
    queue.push(root)
    while (queue.length) {
        //获取一层的节点数
        let len = queue.length
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left)
            if (queue[i].right) queue.push(queue[i].right)
            subRes.push(queue[i].val)
        }
        //删除遍历过的一层的节点
        queue.splice(0, len)
        //结果存入返回数组中
        res.push(subRes)
        subRes = []
    }
    return res
}