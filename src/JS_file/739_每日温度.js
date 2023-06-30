/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0)
    const stack = []
    stack.push(0)
    for (let i = 1; i < temperatures.length; i++) {
        while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }
    return res
};