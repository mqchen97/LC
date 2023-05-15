/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let y = matrix.length, x = matrix[0].length
    let max = 0
    const dp = new Array(y).fill().map(() => new Array(x).fill(0))
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
                }
                if (dp[i][j] > max) max = dp[i][j]
            }
        }
    }
    return max * max
};