/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const st = []
    let res = 0
    st.push(0)
    for (let i = 1; i < height.length; i++) {
        if (height[st[st.length - 1]] == height[i]) {
            st.pop()
            st.push(i)
        }
        while (height[st[st.length - 1]] < height[i]) {
            let bottom = height[st.pop()]
            if (st.length) {
                let left = st[st.length - 1]
                res += (i - left - 1) * Math.min(height[left], height[i])
            }
        }
    }
    return res
};