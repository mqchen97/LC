/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const numSt = []
    const strSt = []
    let num = 0
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            if (s[i] === '[') {
                strSt.push(res) //开始处理子串，将之前的字符入栈
                numSt.push(num) //将处理好的数字入栈
                num = 0  //初始化数字，准备记录下一个数字
                res = '' //开始处理子串
            } else if (s[i] === ']') { //取出内容合并
                let num = numSt.pop()
                res = strSt.pop() + res.repeat(num)
            } else {
                res += s[i]
            }
        } else {
            num = num * 10 + Number(s[i])
        }
    }
    return res
};

s = "3[a2[c]]ef"

console.log(decodeString(s));