// 空间复杂度O(n)
function productExceptSelf1(nums: number[]): number[] {
  const len = nums.length
  const res: number[] = []
  const leftArr: number[] = [], rightArr: number[] = []
  leftArr[0] = 1
  rightArr[len - 1] = 1
  for (let i = 1; i < len; i++) {
    leftArr[i] = nums[i - 1] * leftArr[i - 1]
    rightArr[len - 1 - i] = rightArr[len - i] * nums[len - i]
  }
  for (let i = 0; i < len; i++) {
    res.push(leftArr[i] * rightArr[i])
  }
  return res
};

// 空间复杂度O(1) 进阶，将right数组优化
function productExceptSelf2(nums: number[]): number[] {
  const len = nums.length
  const res: number[] = new Array(len)
  res[0] = 1
  for (let i = 1; i < len; i++) {
    res[i] = nums[i - 1] * res[i - 1]
  }
  let right = 1
  for (let i = len - 1; i >= 0; i--) {
    res[i] = res[i] * right
    right = right * nums[i]
  }
  return res
};