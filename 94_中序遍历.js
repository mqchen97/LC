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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []
    // function traversal(root) {
    //     if (!root) return;
    //     traversal(root.left)
    //     res.push(root.val)
    //     traversal(root.right)
    // }
    // traversal(root)
    //非递归实现
    let stack = []
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let node = stack.pop()
            res.push(node.val)
            if (node.right) {
                root = node.right
            }
        }
    }
    return res
};