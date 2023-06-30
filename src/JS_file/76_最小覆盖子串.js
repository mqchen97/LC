/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let minLen = s.length + 1
    let res = ''
    //需要的字符种类数
    let missingType = 0
    //保存每种字符需要的数量
    let miss = new Map()
    for (let v of t) {
        if (miss.has(v)) {
            miss.set(v, miss.get(v) + 1)
        } else {
            missingType++
            miss.set(v, 1)
        }
    }

    let left = 0
    for (let right = left; right < s.length; right++) {
        //如果是需要的字符
        if (miss.has(s[right])) {
            //所需-1，可以为负数
            miss.set(s[right], miss.get(s[right]) - 1)
            //如果正好够了，所需的字符-1
            if (miss.get(s[right]) === 0) {
                missingType--
            }
            //当都填满后
            while (missingType === 0) {
                //如果更短就更新
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1
                    res = s.slice(left, right + 1)
                }
                //左边界右移
                let str = s[left]
                //如果遇到需要的字符，需要更新miss，可能会更新misstype
                if (miss.has(str)) {
                    miss.set(str, miss.get(str) + 1)
                    if (miss.get(str) > 0) {
                        missingType++
                    }
                }
                left++
            }
        }
    }
    return res
};