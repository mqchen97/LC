/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const x = matrix[0].length
  const y = matrix.length
  let firstX = false
  let firstY = false
  for (let i = 0; i < x; i++) {
    if (matrix[0][i] === 0) {
      firstX = true;
      break;
    }
  }
  for (let i = 0; i < y; i++) {
    if (matrix[i][0] === 0) {
      firstY = true;
      break;
    }
  }
  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (firstX) {
    for (let i = 0; i < x; i++) {
      matrix[0][i] = 0
    }
  }
  if (firstY) {
    for (let i = 0; i < y; i++) {
      matrix[i][0] = 0
    }
  }
};