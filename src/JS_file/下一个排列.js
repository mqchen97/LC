/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length
    let i = len - 2
    //1. 找到第一个比后一位小的数字
    for (; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            break;
        }
    }
    let j = len - 1
    //如果递减，跳过查找过程，直接反转
    if (i >= 0) {
        //找到第一个比找到数字大的数字
        for (; j > i; j--) {
            if (nums[j] > nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                break;
            }
        }
    }
    //3. 反转后面递减区间
    i = i + 1
    j = len - 1
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }
};