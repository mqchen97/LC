function subarraySum(nums: number[], k: number): number {
  let res = 0
  let prefix = 0
  const map: Map<number, number> = new Map([[0, 1]])
  for (const v of nums) {
    prefix += v
    if (map.has(prefix - k)) {
      res += map.get(prefix - k) as number
    }
    map.set(prefix, (map.get(prefix) ?? 0) + 1)
  }
  return res
};