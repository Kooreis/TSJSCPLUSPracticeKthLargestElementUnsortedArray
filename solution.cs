function findKthLargest(nums, k) {
    if (k < 1 || k > nums.length) {
        return null;
    }
    nums.sort((a, b) => b - a);
}