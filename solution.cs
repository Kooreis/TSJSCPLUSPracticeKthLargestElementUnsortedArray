Here is a JavaScript solution using the built-in sort method:

```javascript
function findKthLargest(nums, k) {
    if (k < 1 || k > nums.length) {
        return null;
    }
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Output: 4
```

This console application sorts the array in descending order and then returns the Kth element. Note that the sort method sorts the array in place, so the original array is modified. If you don't want to modify the original array, you can create a copy before sorting.