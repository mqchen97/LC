/**
 * @param {string} s
 * @return {number}
 */
let str = ')())()(())('

var longestValidParentheses = function (s) {
    const dp = new Array(s.length).fill(0)
    let maxLen = 0
    dp[0] = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2
                //去掉前面有效括号长度后是否可以组成'()'？[]
            } else if (s[i - dp[i - 1] - 1] === '(') {
                dp[i] = i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] + dp[i - 1] + 2 : dp[i - 1] + 2
            }

        }
        maxLen = Math.max(maxLen, dp[i])
    }
    return maxLen
};
console.log(longestValidParentheses(str));