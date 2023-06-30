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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0
    function traversal(root) {
        if (!root) return 0
        let left = traversal(root.left)
        let right = traversal(root.right)
        max = Math.max(max, left + 1 + right)
        return 1 + Math.max(left, right)
    }
    return max
}