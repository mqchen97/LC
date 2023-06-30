/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const len = nums.length
  let num = k % len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, num - 1)
  reverse(nums, num, len - 1)
};

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}