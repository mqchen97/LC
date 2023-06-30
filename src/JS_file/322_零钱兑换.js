/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (!amount) {
        return 0;
    }
    const dp = new Array(amount + 1).fill(-1)
    dp[0] = 0

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] !== -1) {
                if (dp[j] === -1) {
                    if (dp[j - coins[i]] !== -1) dp[j] = dp[j - coins[i]] + 1
                } else {
                    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
                }
            }
        }
    }
    return dp[amount]
};

console.log(coinChange([2, 5, 10, 1], 27));