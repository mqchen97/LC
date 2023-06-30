/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    //贪心
    //终点下标
    const len = nums.length - 1
    //目前可以跳到的最远距离
    let end = 0
    //遍历可以跳到的最远距离
    for (let i = 0; i <= end; i++) {
        //更新最远距离
        end = end > nums[i] + i ? end : nums[i] + i
        //如果可以跳到终点，true
        if (end >= len) return true
    }
    //退出循环说明跳跃距离内不能跳到终点
    return false
};