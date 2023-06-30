function merge(intervals: number[][]): number[][] {
  const len = intervals.length
  if (len === 1) return intervals;
  const res = []
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < len; i++) {
    if (intervals[i - 1][1] >= intervals[i][0]) {
      intervals[i][0] = intervals[i - 1][0]
      intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1])
    } else {
      res.push(intervals[i - 1])
    }
  }
  res.push(intervals[len - 1])
  return res
};