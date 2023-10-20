1. [Two Sum](#two-sum)
2. Median of Two Sorted Arrays
3. Remove Duplicates from Sorted Array
4. Remove Element


## Two Sum

<a id="section-1"></a>

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
**Native Solution :**
```typescript
function twoSum(nums: number[], target: number): number[] {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```
