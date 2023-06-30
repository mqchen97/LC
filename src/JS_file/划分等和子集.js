/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    //0-1背包问题
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 2 == 1) return false
    const res = sum >> 1
    //背包容量为res
    const dp = new Array(res + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = res; j >= nums[i]; j--) {
            //判断能否正好装满
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === res) return true
        }
    }
    return false
};