/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    if (intervals.length < 2) return intervals
    const res = []
    for (let i = 1; i < intervals.length; i++) {
        let prev = intervals[i - 1]
        let cur = intervals[i]
        if (prev[1] >= cur[0]) {
            cur[0] = prev[0]
            cur[1] = Math.max(prev[1], cur[1])
        } else {
            res.push(prev)
        }
    }
    res.push(intervals[intervals.length - 1])
    return res

    //空间最优
    // for (let i = 1; i < intervals.length; i++) {
    //     if (intervals[i - 1][1] >= intervals[i][0]) {
    //         intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1])
    //         intervals.splice(i, 1)
    //         i--
    //     }
    // }
    // return intervals
};