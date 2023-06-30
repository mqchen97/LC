/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = new Array(nums.length + 1).fill(0)
    dp[0] = 0
    dp[i] = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        //判断如果上上家的钱加上这家多于上家，就偷，否则不偷
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[nums.length]
};