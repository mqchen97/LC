/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    res.push([])
    let arr = []
    function backtracking(index) {
        if (index === nums.length) return;
        for (let i = index; i < nums.length; i++) {
            arr.push(nums[i])
            res.push([...arr])
            //将下一位加入数组
            backtracking(i + 1)
            arr.pop()
        }
    }
    backtracking(0)
    return res
}

console.log(subsets([1, 2, 3]).forEach(item => {
    console.log(item);
}));