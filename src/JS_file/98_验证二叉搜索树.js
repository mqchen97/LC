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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let value = -Infinity
    let flag = true
    function traversal(node) {
        if (!node) return;
        traversal(node.left)
        if (flag === false) return;
        if (value >= node.val) {
            flag = false
            return;
        } else {
            value = node.val
        }
        traversal(node.right)
    }
    traversal(root)
    return flag
};