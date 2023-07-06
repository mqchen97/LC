function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    // while是将替换到当前位置的正数放到它应该在的位置
    // nums[nums[i]-1] !== nums[i] 为了排除当前nums[i]已经在应该在的位置，以及如果有和nums[i]相同的正数并且该正数已经在正确的位置，这两种情况会导致while死循环
    while (nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
      const temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
};