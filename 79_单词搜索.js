/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let res = false
    let y = board.length
    let x = board[0].length
    let use = new Array(y).fill().map(() => new Array(x).fill(false))
    //感染函数
    function infect(i, j, index) {
        if (index === word.length) {
            res = true;
            return;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || use[i][j] === true) {
            return;
        }
        if (board[i][j] === word[index]) {
            use[i][j] = true
            infect(i, j + 1, index + 1)
            infect(i, j - 1, index + 1)
            infect(i + 1, j, index + 1)
            infect(i - 1, j, index + 1)
            use[i][j] = false
        } else {
            return;
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            infect(i, j, 0)
        }
    }
    return res
};

