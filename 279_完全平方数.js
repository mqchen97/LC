/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    if (Math.sqrt(n) === Math.sqrt(n).toFixed()) return 1
    const dp = []
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        dp[i] = i
    }
    for (let i = 2; i * i <= n; i++) {
        for (let j = 2; j <= n; j++) {
            if (j - i * i >= 0) {
                dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
            }
        }
    }
    return dp[n]
};

console.log(numSquares(13));