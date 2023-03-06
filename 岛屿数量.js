/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    //感染函数
    function infect(grid, i, j) {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] != 1) return;
        grid[i][j] = 2
        infect(grid, i - 1, j)
        infect(grid, i + 1, j)
        infect(grid, i, j - 1)
        infect(grid, i, j + 1)
    }
    let count = 0
    let x = grid[0].length
    let y = grid.length
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (grid[i][j] == 1) {
                count++
                infect(grid, i, j)
            }
        }
    }
    return count
};