# Sorting

**Sorting** refers to ordering data in an increasing or decreasing manner according to some linear relationship among the data items.

In **computer science,** arranging in an ordered sequence is called "sorting". Sorting is a common operation in many applications, and efficient algorithms have been developed to perform it.

A **sorting algorithm** is an algorithm that puts elements of a list into an order. The most frequently used orders are numerical order and lexicographical order, and either ascending or descending. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists.

The most common uses of sorted sequences are:

- making lookup or search efficient;
- making merging of sequences efficient;
- enabling processing of data in a defined order.

**Stability :** A sorting algorithm is considered stable if the two or more items with the same value maintain the same relative positions even after sorting.

Formally, the output of any sorting algorithm must satisfy two conditions:

1. The output is in monotonic order (each element is no smaller/larger than the previous element, according to the required order).
2. The output is a permutation (a reordering, yet retaining all of the original elements) of the input.

For optimum efficiency, the input data should be stored in a data structure which allows random access rather than one that allows only sequential access.

There are various sorting algorithms that can be used to complete this operation. And, we can use any algorithm based on the requirement.

- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**
- **Merge Sort**
- **Quicksort**
- **Cycle Sort**
- **Counting Sort**
- **Radix Sort**
- **Bucket Sort**
- **Heap Sort**
- **Shell Sort**

## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high.

!https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif

**Implementation :**

```tsx
function bubbleSort(arr: number[]){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

let arr = [4,2,1,5,10, 7]
bubbleSort(arr)
console.log(arr)
```

**Time  Complexity**  :   $T(n) = T(n * (n-1)/2)

= Big O(n^2)$

**Space Complexity :  $Big O(1)$**

## Selection Sort

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

- The subarray which is already sorted.
- Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

!https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif

**Implementation :**

```tsx
function selectionSort(arr: number[]){
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}

let arr = [4,2,1,5,10, 7]
selectionSort(arr)
console.log(arr)
```

**Time  Complexity**  :   $T(n) = T(n * (n-1)/2)

= Big O(n^2)$

**Space Complexity :  $Big O(1)$**

## **Insertion Sort**

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

- This algorithm is one of the simplest algorithm with simple implementation
- Basically, Insertion sort is efficient for small data values
- Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.

!https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif

**Implementation :**

```tsx
function insertionSort(arr: number[]){
    for (let i = 1; i < arr.length; i++){
       let key = arr[i]
       let j = i - 1;

       while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
       }

       arr[j + 1] = key;
    }
}

let arr = [4,2,1,5,10, 7]
insertionSort(arr)
console.log(arr)
```

**Time  Complexity**  :

- **Best Case (Already Sorted) :**    $T(n) = \Theta(n)$
- **Worst Case (Reverse Sorted) :**    $T(n) = \Theta(n^2)$
- **In General :**    $T(n) = T(n * (n-1)/2)

= Big O(n^2)$

**Space Complexity :  $Big O(1)$**

## Merge **Sort**

Merge Sort is a Divide and Conquer algorithm. It divides the input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function ****is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one in a sorted manner.

!https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif

!https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg

**Implementation - I:**

```tsx
function mergeSort(arr: number[], l: number, r:number){
        if (l === r) return;

        let m = Math.floor((l + r) / 2)
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
}

function merge(arr:number[], l:number, m:number, r:number,){
    let i = l;
    let j = m + 1;
    let temp = []

    while (i <= m && j <= r){
        if(arr[i] <= arr[j]){
            temp.push(arr[i])
            i++;
        }else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= m){
        temp.push(arr[i])
        i++;
    }

    while (j <= r){
        temp.push(arr[j])
        j++;
    }

    for (let i = l; i <= r; i++){
        arr[i] = temp[i - l]
    }
}

let arr = [4, 2, 1, 5, 6]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)
```

**Time  Complexity**  :   $T(n) = T(n * log n) = \Theta (nlogn )$

**Space Complexity :  $Big O(1)$**

## Cyclic Sort

Cycle sort is a comparison sorting algorithm which forces array to be factored into the number of cycles where each of them can be rotated to produce a sorted array. It is theoretically optimal in the sense that it reduces the number of writes to the original array.

It is an in-place and unstable sorting algorithm.

It is optimal in terms of number of memory writes. It minimizes the number of memory writes to sort. Each value is either written zero times, if it’s already in its correct position, or written one time to its correct position.

This pattern is useful when given numbers from range 1 - N

Consider an array of `n` distinct elements. An element `a` is given, index of `a` can be calculated by counting the number of elements that are smaller than `a`

1.  If the element is found to be at its correct position, simply leave it as it is.
2. Otherwise, find the correct position of `a` by counting the total number of elements that are less than `a` . where it must be present in the sorted array. The other element `b` which is replaced is to be moved to its correct position. This process continues until we got an element at the original position of `a`.

**Implementation :**

```tsx
function cyclicSort(arr: number[]){
    let i = 0;

    while (i < arr.length){
        let correctInd = arr[i] - 1;
        if(arr[i] !== arr[correctInd]){
            let temp = arr[i]
            arr[i] = arr[correctInd]
            arr[correctInd] = temp
        }else {
            i++;
        }
    }
}

let arr = [1, 4, 5, 3, 2]
cyclicSort(arr)
console.log(arr)
```

**Time  Complexity**  :   $T(n) = T((n -1) + n) = 2n - 1

= Big O(n)$

**Space Complexity :  $Big O(1)$**

## Quick Sort

Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called **partition-exchange sort**. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. Most implementations of quicksort are not stable, meaning that the relative order of equal sort items is not preserved.

Mathematical analysis of quicksort shows that, on average , the algorithm takes O(nlog⁡n) comparisons to sort *n* items. In the worst case , it makes n(n2) comparisons.

Despite O(n2) in worst case, it is considered faster compared to **merge-sort** because of the following reasons.

1. In - Place
2. Cache Friendly
3. Average case is O(nlogn)
4. Tail recursive

**Three partitions are possible for the Quicksort algorithm:**

1. **Naive partition:** In this partition helps to maintain the relative order of the elements but this partition takes O(n) extra space.
2. **Lomuto partition:** In this partition, The last element is chosen as a pivot in this partition. The pivot acquires its required position after partition but more comparison takes place in this partition.
3. **Hoare's partition:** In this partition, The first element is chosen as a pivot in this partition. The pivot displaces its required position after partition but less comparison takes place as compared to the Lomuto partition.

**Steps to implement this algorithms:**

1. An array is divided into subarrays by selecting a **pivot element** (element selected from the array).While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
2. The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
3. At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

**Naive Partition :**

```tsx
function naivePartition(arr:number[]){
    let n = arr.length
    let result = []
    let pivot = arr[n - 1]

    for (let i = 0; i < n; i++){
        if(arr[i] <= pivot){
            result.push(arr[i])
        }
    }

    for (let i = 0; i < n; i++){
        if(arr[i] > pivot){
            result.push(arr[i])
        }
    }

    for (let i = 0; i < result.length; i++){
        arr[i] = result[i]
    }
}

let arr = [10,80,30,90,40,50,70]
naivePartition(arr)
console.log(arr)
```

**Lamuto Partition :**

```tsx
function lamutoPartition(arr: number[], l: number, h: number) {
    let pivot = arr[h]
    let i = l - 1;

    for (let j = l; j < h; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }

    swap(arr, i + 1, h)
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [10, 80, 30, 90, 40, 50, 70]
lamutoPartition(arr, 0, 6)
console.log(arr)
```

**Hoare Partition :**

```tsx
function hoarePartition(arr: number[], l: number, h: number) {
    let pivot = arr[l]
    let i = l;
    let j = h;

    while (true){
        while(arr[i] < pivot){
            i++;
        }

        while(arr[j] > pivot){
            j--;
        }

        if(i >= j) return i

        swap(arr, i, j)
    }
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [5,3,8,4,2,7,1,10]
hoarePartition(arr, 0, arr.length - 1)
console.log(arr)
```

**Quick Sort Implementation (using hoare partition) :**

```tsx
function quickSort(arr: number[], l: number, h: number) {
    if(l >= h) return

    let p = partition(arr, l, h)
    quickSort(arr, l, p - 1)
    quickSort(arr, p + 1, h)
}

function partition(arr: number[], l: number, h: number) {
    let pivot = arr[l]
    let i = l;
    let j = h;

		for (;;){
        while(arr[i] < pivot){
            i++;
        }

        while(arr[j] > pivot){
            j--;
        }

        if(i >= j) return i

        swap(arr, i, j)
    }
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [5,3,8,4,2,7,1,10]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
```

**Time  Complexity**  :   

**Average Case :**  $T(n) = T(n * log n) = \Theta (nlogn )$

**Worst** **Case :**  $T(n) = T(n2) = \Theta (n2 )$

**Space Complexity :  $Big O(1)$**