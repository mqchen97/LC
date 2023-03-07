/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    //单调栈
    let st = []
    heights = [0, ...heights, 0]
    let maxSize = 0
    for (let i = 0; i < heights.length; i++) {
        while (heights[i] < heights[st[st.length - 1]]) {
            let left = st.pop()
            //还存在于栈中的下标，代表着以它为高度的矩形的最大下标，它的最小下标为单调栈前一个元素-1(再前一位就达不到这个高度了，单调栈单增)
            let size = heights[left] * (i - st[st.length - 1] - 1)
            maxSize = Math.max(size, maxSize)
        }
        st.push(i)
    }
    return maxSize
};