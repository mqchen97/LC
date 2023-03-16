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
            //当i===p，说明边界后一位还是0，其实swap直接返回; 如果i > p,p后一位肯定是1，此时遇到0，只需要将0 1位置换一下
            i++
        } else if (nums[i] === 2) {
            q = q - 1
            //将2移动到后面，i不变，因为替换的元素没有扫描过，是0 1 2都有可能，需要对它再做判断
            swap(i, q)
        } else {
            //遇到1不需要将它放进边界内，直接跳过
            i++
        }
    }

    function swap(i, j) {
        if (i === j) return;
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
};