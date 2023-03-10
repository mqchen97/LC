/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let res = []
    let need = {}
    let win = {}
    let left = 0, right = 0
    for (let v of p) {
        need[v] = (need[v] || 0) + 1
    }
    let pLen = p.length
    while (right < s.length) {
        let str = s[right]
        if (need[str]) {
            win[str] = (win[str] || 0) + 1
            //如果某个字符超出所需的数量后，滑动左边界直到跳过第一个该字符位置
            if (win[str] > need[str]) {
                //滑动过程中删除窗口的字符
                while (s[left] !== str) {
                    win[s[left++]]--
                }
                //找到后再向右移动一位跳过它
                win[s[left++]]--
            }
            //其他情况都是正常添加情况，因此添加到窗口大小和p一样时，说明找到异位词
            if (right - left + 1 === pLen) {
                //加入结果
                res.push(left)
                //左边界滑动一位
                win[s[left]]--
                left++
            }
        } else {
            //遇到其他字符串，直接从后一位开始遍历
            left = right + 1
            win = {}
        }
        right++
    }
    return res
};