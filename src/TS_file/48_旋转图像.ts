/**
 Do not return anything, modify matrix in-place instead.
 */
function rotateImage(matrix: number[][]): void {
  const n = matrix.length
  const loop = Math.floor(n / 2)
  let count = 0
  while (count < loop) {
    for (let i = count; i < n - count - 1; i++) {
      const a = matrix[count][i]
      const b = matrix[i][n - count - 1]
      const c = matrix[n - count - 1][n - i - 1]
      const d = matrix[n - i - 1][count]
      matrix[count][i] = d
      matrix[i][n - count - 1] = a
      matrix[n - count - 1][n - i - 1] = b
      matrix[n - i - 1][count] = c
    }
    count++
  }
};