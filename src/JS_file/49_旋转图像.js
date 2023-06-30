/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix.length
    for (let i = 0; i < len >> 1; i++) {
        for (let j = i; j < len - i - 1; j++) {
            let temp = matrix[i][j]
            let temp2 = matrix[j][len - i - 1]
            let temp3 = matrix[len - 1 - i][len - 1 - j]
            let temp4 = matrix[len - 1 - j][i]
            matrix[i][j] = temp4
            matrix[j][len - i - 1] = temp
            matrix[len - 1 - i][len - 1 - j] = temp2
            matrix[len - 1 - j][i] = temp3
        }
    }
    return matrix
};