/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const res = []
    const str = []
    function backtracking(index) {
        if (str.length == digits.length) {
            res.push(str.join(''))
            return;
        }
        let j = digits[index]
        for (let i = 0; i < arr[j].length; i++) {
            let temp = arr[j]
            str.push(temp[i])
            backtracking(index + 1)
            str.pop()
        }
    }
    backtracking(0)
    return res
};