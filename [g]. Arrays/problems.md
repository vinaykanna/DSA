## Problems
1. [Two Sum](#two-sum)
2. Median of Two Sorted Arrays
3. Remove Duplicates from Sorted Array
4. Remove Element

## Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
#### Solution 1 - Native - using nested loops:
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
Time Complexity = O(n2)
Space Complexity = O(1)

#### Solution 2 - Better Solution (Using HashMap) :
```typescript
function twoSum(nums: number[], target: number): number[] {
    let n = nums.length
    let map = new Map()
    for (let i = 0; i < n; i++){
        map.set(nums[i],i)
    }
    for (let i = 0; i < n; i++){
        let complement = target - nums[i]
        if(map.get(complement) && map.get(complement) !== i){
            return [i, map.get(complement)]
        }
    }
    
};
Time Complexity = O(n)
```
#### Solution 3 - Improved Solution (Using HashMap) :
```typescript
function twoSum(nums: number[], target: number): number[] {
    let n = nums.length
    let map = new Map()
    for (let i = 0; i < n; i++){
        let complement = target - nums[i]
        if(map.has(complement)){
            return [i, map.get(complement)]
        }
        
        map.set(nums[i],i)
    }
};
Time Complexity = O(n)
```
