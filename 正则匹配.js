var isMatch = function (s, p) {
    const sLen = s.length, pLen = p.length
    if (sLen != 0 && pLen == 0) return false
    const dp = new Array(sLen + 1).fill().map(item => new Array(pLen + 1).fill(false))
    dp[0][0] = true
    for (let j = 1; j < pLen + 1; j++) {
        if (p[j - 1] == '*') dp[0][j] = dp[0][j - 2]
    }

    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] == '*') {
                if (p[j - 2] == s[i - 1] || p[j - 2] == '.') {
                    //重复多次的情况，因为是动归，因此比如重复三次的情况是在重复两次（重复两次是在重复一次的结果下）已经得到结果的情况下得出的，因此dp[i][j] = dp[i-1][j]
                    dp[i][j] = dp[i - 1][j - 2] || dp[i - 1][j] || dp[i][j - 2] //让*前数字重复1次，n次，0次
                } else {
                    dp[i][j] = dp[i][j - 2] //不匹配，将前面字符去掉看是否有匹配的情况
                }
            }
        }
    }
    return dp[sLen][pLen]
};