function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = []
  const x = matrix[0].length
  const y = matrix.length
  let count = 0
  let min = Math.min(x, y)
  while (count < Math.floor(min / 2)) {
    for (let i = count; i < x - count; i++) {
      res.push(matrix[count][i])
    }
    for (let i = count + 1; i < y - count; i++) {
      res.push(matrix[i][x - count - 1])
    }
    for (let i = x - count - 2; i >= count; i--) {
      res.push(matrix[y - count - 1][i])
    }
    for (let i = y - count - 2; i >= count + 1; i--) {
      res.push(matrix[i][count])
    }
    count++
  }
  if (min % 2 === 1) {
    if (min === y) {
      for (let i = count; i < x - count; i++) {
        res.push(matrix[count][i])
      }
    } else {
      for (let i = count; i < y - count; i++) {
        res.push(matrix[i][x - count - 1])
      }
    }
  }
  return res
};