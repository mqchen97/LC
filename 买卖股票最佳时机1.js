/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let max = 0,minPrice = prices[0]
    // for(let i = 1; i < prices.length; i++){
    //     max = Math.max(max, prices[i] - minPrice)
    //     minPrice = Math.min(minPrice,prices[i])
    // }
    // return max

    //动态规划方法
    //dp[i][0] 持有股票利润
    //dp[i][1] 不持有股票利润
    const dp = new Array(prices.length).fill().map(() => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return Math.max(dp[prices.length - 1][1])
};