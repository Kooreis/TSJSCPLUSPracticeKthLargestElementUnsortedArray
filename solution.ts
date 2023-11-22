Here is a TypeScript solution for finding the Kth largest element in an unsorted array:

```typescript
class KthLargestElement {
    private arr: number[];
    private k: number;

    constructor(k: number, arr: number[]) {
        this.arr = arr;
        this.k = k;
        this.arr.sort((a, b) => b - a);
    }

    public add(val: number): number {
        let i = 0;
        while (i < this.arr.length) {
            if (this.arr[i] < val) break;
            i++;
        }
        this.arr.splice(i, 0, val);
        return this.arr[this.k - 1];
    }
}

let k = 3;
let arr = [4, 5, 8, 2];
let kthLargest = new KthLargestElement(k, arr);
console.log(kthLargest.add(3));   // returns 4
console.log(kthLargest.add(5));   // returns 5
console.log(kthLargest.add(10));  // returns 5
console.log(kthLargest.add(9));   // returns 8
console.log(kthLargest.add(4));   // returns 8
```

This TypeScript solution uses a class `KthLargestElement` to encapsulate the array and the value of `k`. The constructor sorts the array in descending order. The `add` method inserts a new value into the sorted array at the correct position to maintain the sorted order, and then returns the Kth largest element.