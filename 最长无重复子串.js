/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0 //最终结果
    let left = 0 //双指针前
    let right = 0 //双指针后
    const map = new Map()
    for (; right < s.length; right++) {
        //如果之前遇到过当前正在遍历的字符,并且之前出现的位置在本次记录的子串中，更新子串以及结果
        if (map.has(s[right]) && left <= map.get(s[right])) {
            //子串长度 = (right-1) - left + 1 
            res = res > right - left ? res : right - left
            //更新左指针，之前出现的位置的后一位
            left = map.get(s[right]) + 1
        }
        //存储字符最新位置
        map.set(s[right], right)
    }
    //最后再更新一次res(最后一个无重复子串没有res更新)
    res = res > right - left ? res : right - left
    return res
};