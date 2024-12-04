# Problem solving techniques

- [Two pointers](#two-pointers-approach)
- [Sliding window](#sliding-window-technique)
- [Pre-computation or pre-calculation](#pre-computation-or-pre-calculation)
- [Kadane’s Algorithm](#kadanes-algorithm)



## Two Pointers Approach

*“The most effective techniques are those that are simple and well-executed,”*  in Data Structures and Algorithms, the two pointer technique is one of them.

The **two pointer technique** is a near necessity in any software developer's toolkit, especially when it comes to technical interviews.

The name two pointers does justice in this case, as it is exactly as it sounds. It's the use of two different pointers (usually to keep track of array or string indices) to solve a problem involving said indices with the benefit of saving time and space.

Two Pointers is a pattern in which two pointers iterate across the data structure until one or both of them satisfy the necessary condition.

### **What is a pointer?**

A pointer [](https://www.codingninjas.com/blog/2020/07/27/understanding-pointers-references-in-c/)is a reference to an object. That object stores a memory address of another value located in computer memory, or in some cases, that of memory-mapped computer hardware. Speaking in simpler terms – a variable storing the address to an array is also a pointer

### ****When do we use it?****

- In many problems **involving collections such as arrays or lists**, we have to analyze each element of the collection compared to its other elements.
- There are many approaches to solving problems like these. For example we usually start from the first index and iterate through the data structure one or more times depending on how we implement our code.
- Sometimes we may even have to create an additional data structure depending on the problem's requirements. This approach might give us the correct result, but it likely won't give us the most space and time efficient result.
- This is why the two-pointer technique is efficient. We are able to process two elements per loop instead of just one

**Common patterns in the two-pointer approach entail:**

1. Two pointers, each starting from the beginning and the end until they both meet.
2. One pointer moving at a slow pace, while the other pointer moves at twice the speed.

These patterns can be used for string or array questions. They can also be streamlined and made more efficient by iterating through two parts of an object simultaneously.

Let's take a look at some examples:

**1. Reverse the characters in a string**

> One pointer starts from the beginning while the other pointer starts from the end.
> 

First, let's assume that we already have the swap function defined below:

```tsx
private void swap(char[] str, int i, int j) {
    char temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}
```

The idea is to swap the first character with the end, advance to the next character and swapping repeatedly until it reaches the middle position. We calculate the middle position as

$\lfloor\frac{n}{2}\rfloor$. You should verify that the middle position works for both odd and even size of array.

```tsx
public void reverse(char[] str) {
    int n = str.length;
    for (int i = 0; i < n / 2; i++) {
        swap(str, i, n - i - 1);
    }
}
```

Or we can also solve the problem using the two-pointer technique.

```tsx
public void reverse(char[] str) {
    int i = 0, j = str.length - 1;
    while (i < j) {
        swap(str, i, j);
        i++;
        j--;
    }
}
```

**2. Remove duplicates from a sorted array**

> One slow-runner and the other fast-runner.
> 

```tsx
function removeDuplicates(nums: number[]){
  let p = 1
  for (let i = 1;i < nums.length;i++) {
    if(nums[i] !== nums[i-1]){
	    nums[p] = nums[i]
	    p++
    }
  }
  nums.length = p
};

let arr = [0,0,1,2,3,3,4,4,12,13]
removeDuplicates(arr)
console.log(arr)
```

## Sliding Window Technique

When dealing with problems that require checking the answer of some ranges inside a given array, the sliding window algorithm can be a very powerful technique.

**The main idea behind the sliding window technique is to convert two nested loops into a single loop**. Usually, the technique helps us to reduce the time complexity from  O(n2) to O(n)

Consider a long chain connected together. Suppose you want to apply oil in the complete chain with your hands, without pouring the oil from above.
One way to do so is to :

- pick some oil
- apply onto a section of chain
- then again pick some oil
- then apply it to the next section where oil is not applied yet
- and so on till the complete chain is oiled.

Another way to do so, is to use a cloth, dip it in oil, and then hold onto one end of the chain with this cloth. Then instead of re-dipping it again and again, just slide the cloth with hand onto the next section, and next, and so on till the other end.

The second way is known as the **Sliding window technique** and the portion which is slided from one end to end, is known as **Sliding Window**

Basically, the technique lets us iterate over the array holding two pointers and these pointers indicate the left and right ends of the current range. In each step, we either move, or both of them to the next range.

In order to do this, we must be able to add elements to our current range when we move forward. Also, we must be able to delete elements from our current range when moving forward. Each time we reach a range, we calculate its answer from the elements we have inside the current range.

In case the length of the ranges is fixed, we call this the fixed-size sliding window technique. However, if the lengths of the ranges are changed, we call this the flexible window size technique.

**Example: Maximum sum of k consequtive elements**

**Naive Solution :**

```tsx
function maximumSum(nums:number[], k:number){
  let n = nums.length
  let maxSum = 0;

  for (let i = 0; i <= n - k; i++){
    let currentSum = nums[i];
    for (let j = i + 1; j < i + k; j++{
        currentSum += nums[j]
    }
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

console.log(maximumSum([5,-10,6,90, 3], 2))
```

**Sliding Window Solution :**

```tsx
// version 1
function maximumSum(nums:number[], k:number){
  let n = nums.length
  let currentSum = 0;

  for (let i = 0; i < k; i++){
    currentSum += nums[i]
  }

  let res = currentSum
  for (let i = k; i < n; i++){
    currentSum = currentSum + nums[i] - nums[i - k]
    res = Math.max(res, currentSum)
  }

  return res
}

console.log(maximumSum([5,-10,6,90, 3], 2))

//version 2
function maximumSum(nums:number[], k:number){
  let n = nums.length
  let currentSum = 0;

  for (let i = 0; i < k; i++){
    currentSum += nums[i]
  }

  let res = currentSum
  for (let i = 1; i <= n - k; i++){
    currentSum = currentSum + nums[i + k - 1] - nums[i - 1] 
    res = Math.max(res, currentSum)
  }

  return res
}

console.log(maximumSum([10, 5, -2, 20, 1], 3))
```

## Pre-computation (or pre-calculation)

Pre-computation (or pre-calculation) is a powerful technique in array-based problem-solving where you preprocess the input to calculate intermediate results that can be reused multiple times during queries or computations. This helps reduce redundant calculations and speeds up the solution for multiple queries or operations.

#### Key Concepts of Pre-computation in Array Problems

1. Prefix Sum Array:
    - Precompute the sum of elements from the beginning of the array up to each index.
    - This allows us to efficiently calculate the sum of any subarray in constant time.
2. Suffix Sum Array:
    - Similar to prefix sum, but precompute the sum of elements from the end of the array up to each index.
3. Product Prefix Array:
    - Precompute the product of elements from the beginning of the array up to each index.
4. Product Suffix Array:
    - Similar to product prefix, but precompute the product of elements from the end of the array up to each index.
5. Difference Array:
    - Precompute the difference between elements from the beginning of the array up to each index.
6. Minimum/Maximum Prefix/Suffix Arrays:
    - Precompute the minimum or maximum element in subarrays starting from the beginning or end of the array .
7. Hashing or Frequency Array
    - Precompute the frequency of each element in the array.
8. Dynamic Programming:
    - Precompute intermediate results to avoid redundant calculations in recursive or iterative solutions.
9. Sparse Table (Range Queries):
    -  Efficiently compute range minimum/maximum/gcd in O(1) query time.
    - Precompute a table of size (n log n) containing the minimum element in each subarray of size 2^i.

Ex: Prefix sums can be used to calculate the sum of elements in a given range. If we wish to find out the sum of values between [L..R] we can obtain the sum by subtracting the prefix sum PreSum[R] by PreSum[L-1]

```js
let inArr = [1,3,4,5,2,7,8,11]
let PreSum = [1,4,8,13,15,22,30,41]
```

```js
Sum[L..R] = PreSum[R]-PreSum[L-1] { If L!=0 }
Sum[L..R] = PreSum[R] { If L=0 }
```

## Kadane’s Algorithm

**Kadane’s Algorithm** is an iterative **dynamic programming** algorithm. It calculates the maximum sum subarray ending at a particular position by using the maximum sum subarray ending at the previous position.

The idea of **Kadane’s algorithm** is to maintain a variable **max_ending_here** that stores the maximum sum contiguous subarray ending at current index and a variable **max_so_far** stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in **max_ending_here** compare it with **max_so_far** and update **max_so_far** if it is greater than **max_so_far**.

```tsx
Initialize:
    max_so_far = INT_MIN
    max_ending_here = 0

Loop for each element of the array

  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
  (c) if(max_ending_here < 0)
            max_ending_here = 0
return max_so_far
```

**Kadane’s Algorithm** can be viewed both as greedy and DP. As we can see that we are keeping a running sum of integers and when it becomes less than 0, we reset it to 0 (Greedy Part). This is because continuing with a negative sum is way worse than restarting with a new range. Now it can also be viewed as a DP, at each stage we have 2 choices: Either take the current element and continue with the previous sum OR restart a new range. Both choices are being taken care of in the implementation.
