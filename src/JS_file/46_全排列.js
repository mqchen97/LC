/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    let arr = []
    let set = new Set()
    function backtracking() {
        if (arr.length === nums.length) {
            res.push([...arr])
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) continue
            arr.push(nums[i])
            set.add(nums[i])
            backtracking()
            arr.pop()
            set.delete(nums[i])
        }
    }
    backtracking()
    return res
};

console.log(permute([1, 2, 3]).forEach(item => console.log(item)));