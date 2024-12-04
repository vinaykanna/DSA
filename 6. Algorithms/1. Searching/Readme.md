# Searching

Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored. Based on the type of search operation, these algorithms are generally classified into two categories:

1. **Sequential Search**: In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.
2. **Interval Search**: These algorithms are specifically designed for searching in sorted data-structures. These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search, Ternary Search.

## Linear Search

**Linear Search** means to sequentially traverse a given list or array and check if an element is present in the respective array or list. The idea is to start traversing the array and compare elements of the array one by one starting from the first element with the given element until a match is found or end of the array is reached.

**Time Complexity**: O(N). Since we are traversing the complete array, so in worst case when the element X does not exists in the array, number of comparisons will be N. Therefore, *worst case time complexity of the linear search algorithm is O(N)*.

```tsx
function linearSearch(nums:number[], target:number){

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === target){
      return i
    }
  }

  return -1
}

console.log(linearSearch([2,3,10, 7, 9, 11], 7))
```

**Time Complexity : $T(n) = BigO(n)$**

## Binary Search

**Binary Search** is a searching algorithm for searching an element in a sorted list or array. Binary Search is efficient than Linear Search algorithm and performs the search operation in logarithmic time complexity for sorted arrays or lists.

Binary Search performs the search operation by repeatedly dividing the search interval in half. The idea is to begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

**Time Complexity**: O(Log N), where N is the number of elements in the array.

**Steps:** We basically ignore half of the elements just after one comparison.

- Compare X with the middle element of the array.
- If X matches with middle element, we return the mid index.
- Else If X is greater than the mid element, then X can only lie in right half subarray after the mid element. So we will now look for X in only the right half ignoring the complete left half.
- Else if X is smaller, search for X in the left half ignoring the right half.

**Implementation**: The Binary Search algorithm can be implemented both recursively and iteratively.

**Iterative Implementation (Ascending Order) :**

```tsx
function binarySearch(nums:number[], target:number){
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end){
    let mid = Math.floor((end + start) / 2)

    if(nums[mid] === target) {
      return mid
    }
    else if(target > nums[mid]){
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }

  return -1;
}

console.log(binarySearch([2,3, 7, 9, 10, 11], 9))
```

**Time Complexity : $T(n) = BigO(logn)$**

**Space Complexity :  $T(n) = BigO(1)$**

**Iterative Implementation (Descending Order) :**

```tsx
function binarySearch(nums:number[], target:number){
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end){
    let mid = Math.floor((end + start) / 2)

    if(nums[mid] === target) {
      return mid
    }
    else if(target > nums[mid]){
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }

  return -1;
}

console.log(binarySearch([11, 10, 8, 6, 5, 1], 1))
```

**Recursive Implementation (Ascending Order) :**

```tsx
function binarySearch(nums:number[], start: number, end: number, target:number): number{
    if (start > end) return -1

    let mid = Math.floor((end + start) / 2)

    if(nums[mid] === target) {
      return mid
    }
    else if(target > nums[mid]){
      return binarySearch(nums, mid + 1, end, target)
    }
    else {
      return binarySearch(nums, start, mid - 1, target)
    }
  
}
let arr = [1,3, 5, 7, 8, 11]
let n = arr.length - 1
console.log(binarySearch(arr, 0, n, 11))
```

**Time Complexity : $T(n) = BigO(logn)$**

**Space Complexity :  $T(n) = BigO(logn)$**

## Ternary Search

**Ternary Search** is a Divide and Conquer Algorithm used to perform search operation in a **sorted array**. This algorithm is similar to the Binary Search algorithm but rather than dividing the array into two parts, it divides the array into three equal parts.

In this algorithm, the given array is divided into three parts and the key (element to be searched) is compared to find the part in which it lies and that part is further divided into three parts.

We can divide the array into three parts by taking mid1 and mid2 which can be calculated as shown below. Initially, l and r will be equal to 0 and N-1 respectively, where N is the length of the array.

**Note**: The array must be sorted in order to perform the Binary Search or Ternary Search operation.

**Steps to perform Ternary Search :**

- First, we compare the key with the element at mid1. If found equal, we return mid1.
- If not, then we compare the key with the element at mid2. If found equal, we return mid2.
- If not, then we check whether the key is less than the element at mid1. If yes, then recur to the first part.
- If not, then we check whether the key is greater than the element at mid2. If yes, then recur to the third part.
- If not, then we recur to the second (middle) part.

I**mplementation**: The Ternary Search Algorithm can be implemented in both recursive and iterative manner