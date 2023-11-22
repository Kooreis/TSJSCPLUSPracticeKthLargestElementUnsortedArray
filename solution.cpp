```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int findKthLargest(std::vector<int>& nums, int k) {
    std::sort(nums.begin(), nums.end());
    return nums[nums.size()-k];
}

int main() {
    std::vector<int> nums;
    int n, k, temp;
    std::cout << "Enter number of elements: ";
    std::cin >> n;
    std::cout << "Enter elements: ";
    for(int i = 0; i < n; i++) {
        std::cin >> temp;
        nums.push_back(temp);
    }
    std::cout << "Enter K: ";
    std::cin >> k;
    std::cout << "Kth largest element: " << findKthLargest(nums, k) << std::endl;
    return 0;
}
```