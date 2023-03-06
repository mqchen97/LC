/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// class dequeue{
//     constructor(){

//     }
// }



let arr = [1, 3, -1, -3, 5, 3, 6, 7]

var maxSlidingWindow = function (nums, k) {
    const queue = []
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (queue[0] <= i - k) queue.shift()
        while (nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)

        if (i >= k - 1) res.push(nums[queue[0]])
    }
    return res
};

console.log(maxSlidingWindow(arr, 2));