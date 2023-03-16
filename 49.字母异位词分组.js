/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = []
    let i = 0
    const map = new Map()
    for (let v of strs) {
        //将字符串转换为数组后排序，在转换回字符串
        let temp = v.split('').sort().join('')
        //判断map中是否存在
        if (map.has(temp)) {
            let index = map.get(temp)
            res[index].push(v)
        } else {
            res[i] = []
            res[i].push(v)
            map.set(temp, i)
            i++
        }
    }
    return res
};