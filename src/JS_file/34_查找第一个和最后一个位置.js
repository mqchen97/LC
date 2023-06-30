/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function getLeftRange(i, j) {
        let left = -2
        while (i <= j) {
            let mid = i + ((j - i) >> 1)
            //不断靠近左边界，直到到左边界的下一个退出循环
            if (nums[mid] >= target) {
                j = mid - 1
                left = j
            } else {
                i = mid + 1
            }
        }
        return left
    }
    function getRightRange(i, j) {
        let right = -2
        while (i <= j) {
            let mid = i + ((j - i) >> 1)
            //不断靠近右边界，直到到右边界的下一个退出循环
            if (nums[mid] <= target) {
                i = mid + 1
                right = i
            } else {
                j = mid - 1
            }
        }
        return right
    }

    let left = getLeftRange(0, nums.length - 1)
    let right = getRightRange(0, nums.length - 1)
    if (left === -2 || right === -2 || right - left < 2) {
        return [-1, -1]
    } else {
        return [left + 1, right - 1]
    }

};