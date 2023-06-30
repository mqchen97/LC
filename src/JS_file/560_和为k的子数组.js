/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map()
    let maxLen = 0
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) continue;
        else {
            let left = map.has(nums[i] - 1) ? map.get(nums[i] - 1) : 0
            let right = map.has(nums[i] + 1) ? map.get(nums[i] + 1) : 0
            let len = left + right + 1
            maxLen = Math.max(maxLen, len)
            //将自己加入防止重复
            map.set(nums[i], len)
            //所在子串有可能后面用到的就是两边的数字，因此更新两边
            map.set(nums[i] - left, len)
            map.set(nums[i] + right, len)
        }
    }
    return maxLen
};

const nums = [1, 1, 1], k = 2

console.log(subarraySum(nums, k));