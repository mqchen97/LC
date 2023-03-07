/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = new Array(n + 1).fill(0)
    dp[0] = dp[1] = 1
    //从2个节点的树开始生成dp数组
    for (let i = 2; i <= n; i++) {
        //从1做根节点开始计算有多少种
        for (let j = 1; j <= i; j++) {
            //搜索树左孩子小于根，右大于根
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }
    return dp[n]
};
console.log(numTrees(3));