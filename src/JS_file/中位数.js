function fun(nums1, nums2) {
    //获取需要取得的中位数是第几个，如果是奇数，even得到的值和odd一样，等于求两次中位数/2
    const odd = (nums1.length + nums2.length + 1) >> 1
    const even = (nums1.length + nums2.length + 2) >> 1
    return (getKth(nums1, nums2, odd) + getKth(nums1, nums2, even)) / 2

    function getKth(nums1, nums2, k) {
        if (nums1.length > nums2.length) return getKth(nums2, nums1, k)
        if (nums1.length == 0) return nums2[k - 1]
        if (k == 1) return Math.min(nums1[0], nums2[0])
        const target = k >> 1
        const index = Math.min(target, nums1.length)
        if (nums1[index - 1] > nums2[target - 1]) {
            return getKth(nums1, nums2.slice(target), k - target)
        } else {
            return getKth(nums1.slice(index), nums2, k - index)
        }
    }
}

console.log(fun([1], [2, 3, 4, 5, 6]));