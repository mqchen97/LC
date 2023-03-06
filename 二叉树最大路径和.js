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
var maxPathSum = function (root) {
    let maxSum = -Infinity
    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left)
        let right = dfs(root.right)
        //判断此时最大路径值
        let inner = root.val + left + right
        maxSum = maxSum > inner ? maxSum : inner
        //获取子树可提供的最大路径值
        let isExtend = root.val + Math.max(0, left, right)
        //当前子树可以提供的最大路径也为负时，返回0，即不考虑将这子树加入路径
        return isExtend = isExtend < 0 ? 0 : isExtend
    }
    dfs(root)
    return maxSum
};