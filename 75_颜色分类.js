/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let p = -1, q = nums.length
    let i = 0
    while (i < q) {

        if (nums[i] === 0) {
            p = p + 1
            swap(i, p)
            //因为扫描过的并且还在前面的肯定是1
            i++
        } else if (nums[i] === 2) {
            q = q - 1
            swap(i, q)
            //后面的没扫描过，所以得再看一下
        } else {
            //直接跳过，根据==0时替换
            i++
        }
    }

    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
};