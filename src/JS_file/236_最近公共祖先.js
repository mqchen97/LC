/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function traversal(root, p, q) {
        if (!root) return null;
        if (root === p || root === q) return root
        //后序遍历
        let left = traversal(root.left, p, q)
        let right = traversal(root.right, p, q)
        //前两种说明要么已经找到公共祖先在向上返回，要么只找到一个，但也要返回
        if (left !== null && right === null) return left
        if (left === null && right !== null) return right
        //说明刚好找到公共祖先，所以返回这个祖先
        if (left !== null && right !== null) return root
        //子树上啥也没有，返回null
        if (left === null && right === null) return null
    }
    return traversal(root, p, q)
};