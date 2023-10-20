## Problems
1. [Two Sum](#two-sum)
2. [Remove Duplicates from Sorted Array](remove-duplicates-from-sorted-array)

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
*Time Complexity = O(n<sup>2</sup>)* ; *Space Complexity = O(1)*

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
```
*Time Complexity = O(n)* ; *Space Complexity = O(n)*

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
```
*Time Complexity = O(n)* ; *Space Complexity = O(n)*

## Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
- Return k.
#### Solution 1 :
```typescript
function removeDuplicates(nums: number[]): number {
  let duplicates = 0;
  let pos = 1
  for (let i = 1;i < nums.length;i++){
    if(nums[i] === nums[i-1]){
      duplicates = duplicates + 1
      continue;
    }
    nums[pos] = nums[i]
    pos = pos + 1
  }
  nums.length = nums.length - duplicates
  return nums.length
};
```
*Time Complexity = O(n)* ; *Space Complexity = O(1)*

#### Solution 2 :
```typescript
function removeDuplicates(nums: number[]): number {
  let pos = 1
  for (let i = 1;i < nums.length;i++){
    if(nums[i] === nums[i-1]){
      continue;
    }
    nums[pos] = nums[i]
    pos = pos + 1
  }
  return pos
};
```
*Time Complexity = O(n)* ; *Space Complexity = O(1)*

#### Solution 3 :
```typescript
function removeDuplicates(nums: number[]): number {
  let pos = 1
  for (let i = 1;i < nums.length;i++){
    if(nums[i] === nums[i-1]){
      continue;
    }
    nums[pos] = nums[i]
    pos = pos + 1
  }
  nums.length = pos
  return pos
};
```
*Time Complexity = O(n)* ; *Space Complexity = O(1)*
