function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = []
  const res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (queue[0] <= i - k) queue.shift()
    while (nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    if (i + 1 >= k) res.push(nums[queue[0]])
  }
  return res
};