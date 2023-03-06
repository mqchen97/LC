/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const str = ''
    const res = []
    //因为str是基本类型，因此作为参数传入的每个str都是不同的，不需要退出时处理
    function dfs(lRemain, rRemain, str) {
        if (str.length === 2 * n) {
            res.push(str)
            return;
        }
        if (lRemain > 0) dfs(lRemain - 1, rRemain, str + '(')
        if (lRemain < rRemain) dfs(lRemain, rRemain - 1, str + ')')
    }
    dfs(n, n, str)
    return res
};