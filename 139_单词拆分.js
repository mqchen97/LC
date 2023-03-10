/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    //可以从第一位开始匹配
    dp[0] = true
    for (let i = 0; i <= s.length; i++) {
        //如果成功匹配，true指向的是最后一位的后一位
        if (dp[s.length] === true) return true;
        //false表示不能从这一位开始匹配
        if (dp[i] === false) continue;
        for (let j = 0; j < wordDict.length; j++) {
            let len = wordDict[j].length
            let substr = s.slice(i, i + len)
            if (substr === wordDict[j])
                dp[i + len] = true
        }
    }
    return dp[s.length]
};