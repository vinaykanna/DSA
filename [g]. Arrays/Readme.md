# Arrays

### **Definition**

An Array is a collection of items of same data type stored at contiguous memory locations.

![array-2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97ef25b0-7154-4e38-b247-34c834175baf/array-2.png)

This makes it easier to calculate the position of each element by simply adding an offset to base value, i.e., the memory location of the first element of the array.

It’s used to store multiple items together at one place.

Array elements are generally accessed using index. Generally, in most of the programming languages index begins with Zero.

An array is a linear data structure.

Elements in an array can be stored in two ways.

1. **Homogeneous arrays**:  In which the elements are of the same data type.
2. **Heterogeneous arrays**: In which the elements are of the different data types.

### **Accessing Array Elements**

Arrays allows to access elements randomly. Elements in an array can be accessed using indexes. Suppose an array named **arr** stores N elements. Indexes in an array are in the range of **0 to N-1**, where the first element is present at 0-th index and consecutive elements are placed at consecutive indexes. Element present at ith index in the array **arr[]** can be accessed as arr[i].

![Array-2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80810db2-ab0b-4b7e-b7b6-9dd81ecaaec3/Array-2.jpg)

### **Usage**

In programming, most of the cases need to store a large amount of data of a similar type. We need to define numerous variables to store such a huge amount of data. While writing the programs, it would be very tough to memorize all variable names. Instead, it is better to define an array and store all the elements in it.

### **Advantages of an Array**

1. Arrays represent multiple data elements of the same type using a single name.
2. Accessing or searching an element in an array is easy by using the index number.
3. An array can be traversed easily just by incrementing the index by 1.
4. Arrays allocate memory in contiguous memory locations for all its data elements.
5. Arrays are cache friendly because items are stored at contiguous memory locations.
6. Arrays allow random access to elements. This makes accessing elements by position faster.

### Types of indexing in an array

1.  0 (zero-based indexing): The first element of the array is indexed by a subscript of 0.
2. 1 (one-based indexing): The first element of the array is indexed by the subscript of 1.
3. n (N-based indexing): The base index of an array can be freely chosen. Usually, programming languages allowing n-based indexing also allow negative index values, and other scalar data types like enumerations, or characters may be used as an array index.

### Categories of arrays

1. Indexed arrays
2. Multidimension arrays
3. Associative arrays

### **Types of arrays**

1. **Static Arrays** - Has the fixed size. It doesn’t resize itself when we add more elements.
2. **Dynamic Arrays** - Has the dynamic size. It resize itself automatically when we add more elements.

# Array Problem solving techniques

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

## Prefix Sum

Prefix sum is the cumulative sum of a sequence of numbers a0, a1, ... . It is itself a sequence of numbers b0, b1, ... such that

$PreSum_0 = a_0$

$PreSum_1 = a_0 + a_1 = PreSum_0 + a_1$

$PreSum_2 = a_0 + a_1 + a_2 = PreSum_1 + a_2$

$PreSum_n=PreSum_{n-1}+ a_n$

Prefix sum operations can be generalized to any binary operator ⊕. Prefix sum operation takes a sequence of n elements [a

0, a1, ..., an] and returns a sequence[a0, (a0⊕ a1) , ... , (a0⊕ a1⊕ a2... ⊕ an) ] containing the prefix sums.

```tsx
let inArr = [1,3,4,5,2,7,8,11]
let PreSum = [1,4,8,13,15,22,30,41]
```

Prefix sums can be used to calculate the sum of elements in a given range. If we wish to find out the sum of values between [L..R] we can obtain the sum by subtracting the prefix sum PreSum[R] by PreSum[L-1]

```tsx
Sum[L..R] = PreSum[R]-PreSum[L-1] { If L!=0 }
Sum[L..R] = PreSum[R] { If L=0 }
```

# Multi-dimensional arrays

A multi-dimensional array can be termed as an array of arrays that stores data in tabular form. Data in multidimensional arrays are stored in row-major order.

The ***general form of declaring N-dimensional arrays*** is:

```tsx
data_type array_name[size1][size2]....[sizeN];
```

The total number of elements that can be stored in a multidimensional array can be calculated by multiplying the size of all the dimensions.

```tsx
The array int x[10][20] can store total (10*20) = 200 elements.
The array int x[10][20] can store total (10*20) = 200 elements.
```

### **2D Array - Matrix**

2 Dimensional arrays are often defined as an array of arrays. A 2D array is also called a matrix. A matrix can be depicted as a table of rows and columns.

```tsx
int arr[max_rows][max_columns];
```

As in a one-dimensional array, data can be accessed by using only an index, and similarly, in a two-dimensional array, we can access the cells individually by using the indices of the cells. There are two indices attached to a single cell, one is its row number, and the other one is its column number.

```tsx
arr[row_index][column_index]
```

****Mapping 2D to 1D array****

2D arrays are mainly created to implement a database table that look alike data structure. Whilst in computer memory, the storage technique for 2D arrays is similar to that of one-dimensional arrays.

The size of a 2D array is always equivalent to the product of the number of rows and the number of columns present in the array. Thus, we need to map two-dimensional arrays to one-dimensional arrays so as to store them in the memory.

![0-1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3301a766-9c47-4c3e-83c1-402119ffe415/0-1.png)

**There are 2 main techniques to map a two-dimensional array to one-dimensional array**

1. **Row Major Ordering:** 
    1. In row-major ordering, all the rows of the two-dimensional array are stored in a contiguous manner in the memory.
    2. First, we insert elements of the 1st row of the 2D array into the memory, followed by the elements of the 2nd row and so on.
    
    ![2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76521abe-ab8b-4bc6-b9ba-ee066e6ac491/2.png)
    
2. **Column Major Ordering:** 
    1. In column-major ordering, all the columns of the two-dimensional array are stored in a contiguous manner in the memory.
    2. First, we insert elements of the 1st column of the 2D array into the memory, followed by the elements of the 2nd column, and so on.
    
    ![3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f0eb4c9-95ad-4962-9e64-f8d0e2be6391/3.png)
    

### **Terminologies**

- **Square Matrix:** A square Matrix has as many rows as it has columns. i.e. no of rows = no of columns.
- **Symmetric matrix:** A square matrix is said to be symmetric if the transpose of original matrix is equal to its original matrix. i.e. (A) = A.
- **Skew-symmetric:** A skew-symmetric (or antisymmetric or antimetric[1]) matrix is a square matrix whose transpose equals its negative. i.e. (A) = -A.
- **Diagonal Matrix:** A diagonal matrix is a matrix in which the entries outside the main diagonal are all zero. The term usually refers to square matrices.
- **Identity Matrix:** A square matrix in which all the elements of the principal diagonal are ones and all other elements are zeros. Identity matrix is denoted as I.
- **Orthogonal Matrix:** A matrix is said to be orthogonal if AA = AA = I.
- **Idempotent Matrix:** A matrix is said to be idempotent if A = A.
- **Involutory Matrix:** A matrix is said to be Involutory if A = I.
- **Singular Matrix**: A square matrix is said to be singular matrix if its determinant is zero i.e. |A|=0
- **Nonsingular Matrix**: A square matrix is said to be non-singular matrix if its determinant is non-zero.

Every Square Matrix can uniquely be expressed as the sum of a symmetric matrix and skew symmetric matrix. A = 1/2 (AT + A) + 1/2 (A - AT).

**Trace of a matrix:** trace of a matrix is denoted as tr(A) which is used only for square matrix and equals the sum of the diagonal elements of the matrix