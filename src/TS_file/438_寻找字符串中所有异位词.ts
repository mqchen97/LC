function findAnagrams(s: string, p: string): number[] {
    const res = []
    const map: Map<string, number> = new Map()
    const len = p.length
    let count = 0, i = 0, j = 0
    for (const v of p) {
        if (map.has(v)) {
            map.set(v, map.get(v) as number + 1)
        } else {
            map.set(v, 1)
            count++
        }
    }
    for (; j < s.length; j++) {
        if (!map.has(s[j])) {
            // 如果存在脏字符，跳过并滑动窗口大小设为0
            while (i < j) {
                if (map.get(s[i]) === 0) count++
                map.set(s[i], map.get(s[i]) as number + 1)
                i++
            }
            i++
        } else {
            if (j - i + 1 === len) {
                map.set(s[j], map.get(s[j]) as number - 1)
                if (map.get(s[j]) === 0) count--;
                // 判断是否时字母异位词
                if (count === 0) res.push(i)
                // 窗口滑动
                // 将左向后移动一位
                if (map.get(s[i]) as number === 0) count++
                map.set(s[i], map.get(s[i]) as number + 1)
                i++
            } else if (j - i + 1 < len) {
                map.set(s[j], map.get(s[j]) as number - 1)
                if (map.get(s[j]) === 0) count--;
            }
        }
    }
    return res
};