# Introduction

A computer program is a collection of instructions to perform a specific task. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A data structure is a named location that can be used to store and organize data. And, and algorithm is a collection of steps to solve a particular problem. Learning data structures and algorithms allow us to write efficient and optimized computer programs.

Data structures are the building blocks of Algorithms, and Algorithms are the platforms upon which Data Structures are applied and tested.

Once you have the knowledge about different data structures and algorithms, you can determine which data structure and algorithm to choose in various conditions.

Having knowledge about data structures and algorithms will help you write codes that faster and require less storage.

# Data Structures

Data is the collection of different numbers, symbols and alphabets to represent information.

A data structure is a storage that is used to store and organize data. It’s way of arranging data on a computer so that it can be accessed and updated efficiently.

A data structure is not only used for organizing the data. It’s also used for processing, retrieving, and storing data.

The choice of a good data structure makes it possible to perform a variety of critical operations effectively. An efficient data structure also uses minimum memory space and execution time to process the structure.

## Classification of Data Structures

### Linear data structures

Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure.

In linear data structures, the elements are arranged in sequence one after the other. 

Elements are arranged in one dimension, also known as linear dimension

Since elements are arranged in particular order, they are easy to implement. However, when the complexity of the program increases, the linear data structures might not be the best choice because of operational complexities.

Examples of linear data structures are array, stack, queue, linked list, etc. 

- **Static Data Structure:** Static data structure has a fixed memory size. It’s easier to access the elements in a static structure.
    
    An example of this data structure is an array.
    
- **Dynamic Data Structure:** In dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code.
    
    Examples of this data structure are queue, stack, etc.
    

### Non-linear data structures

Data structures where data elements are not placed sequentially or linearly are called non-linear data structures.

In non-linear data structure elements are arranged in a hierarchical manner where one element will be connected to one or more elements like in one-many, many-one and many-many dimensions.

In a non-linear data structure, we can’t traverse all the elements in a single run only.

Examples of non-linear data structures are trees and graphs.

# Algorithms

The word **Algorithm** means “A set of rules to be followed in calculations or other problem-solving operations” or “A procedure for solving mathematical problem in a finite number of steps that frequently by recursive operations”.

Therefore **Algorithm** refers to a sequence of finite steps to solve a particular problem.

It is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.

The time required to solve with a procedure/algorithm is much more effective than that without any procedure. Hence the need for an algorithm is a must.

In terms of designing a solution to an IT problem, computers are fast but not infinitely fast. The memory may be inexpensive but not free. So, computing time is therefore a bounded resource and so is the space in memory. So we should use these resources wisely and algorithms that are efficient in terms of time and space will help you do so.

### Characteristics of an algorithm

Not all instructions for programming is an algorithm. In order for some instructions to be an algorithm, it must have the following characteristics.

- **Clear and Unambiguous :** The algorithm should be clear and unambiguous. Each of its steps should be clear in all aspects and must lead to only one meaning.
- **Well-Defined Inputs**: If an algorithm says to take inputs, it should be well-defined inputs.
- **Well-Defined Outputs:** The algorithm must clearly define what output will be yielded and it should be well-defined as well.
- **Finite-ness:** The algorithm must be finite, i.e. it should terminate after a finite time.
- **Feasible:** The algorithm must be simple, generic, and practical, such that it can be executed with the available resources. It must not contain some future technology or anything.
- **Language Independent:** The Algorithm designed must be language-independent, i.e. it must be just plain instructions that can be implemented in any language, and yet the output will be the same, as expected.
- Algorithms should be most effective among many different ways to solve a problem.

### Types of algorithms:

1. **Brute force Algorithms :**
    1. This is the most basic and simplest type of algorithm. A Brute Force Algorithm is the straightforward approach to a problem i.e., the first approach that comes to our mind on seeing the problem. More technically it is just like iterating every possibility available to solve that problem.
    2. Straightforward methods of solving a problem that rely on sheer computing power and trying every possibility rather than advanced techniques to improve efficiency.
2. **Recursive Algorithms :** 
    1. A recursive algorithm is based on recursion. In this case, a problem is solved by breaking it into subproblems of the same type and calling own self again and again until the problem is solved with the help of a base condition.
    2. A recursive algorithm is an algorithm which calls itself with "smaller (or simpler)" input values, and which obtains the result for the current input by applying simple operations to the returned value for the smaller (or simpler) input.
    3. More generally if a problem can be solved utilizing solutions to smaller versions of the same problem, and the smaller versions reduce to easily solvable cases, then one can use a recursive algorithm to solve that problem
3. **Backtracking Algorithms :**
    1. Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem.
    2. Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).
    3. The backtracking algorithm basically builds the solution by searching among all possible solutions. Using this algorithm, we keep on building the solution following criteria. Whenever a solution fails we trace back to the failure point and build on the next solution and continue this process till we find the solution or all possible solutions are looked after.
4. **Searching Algorithms :** 
    1. Search algorithm is an algorithm designed to solve a search problem. Search algorithms work to retrieve information stored within particular data structure, or calculated in the search space of a problem domain, with either discrete or continuous values.
    2. Searching algorithms are the ones that are used for searching elements or groups of elements from a particular sorted or unsorted data structure. They can be of different types based on their approach or the data structure in which the element should be found.
    3. Some common problems that can be solved through the Searching Algorithms are Binary search or linear search
5. **Sorting Algorithms :** 
    1. A sorting algorithm is an algorithm that puts elements of a [l](https://en.wikipedia.org/wiki/List_(computing))ist into an order. The most frequently used orders are numerical order and [l](https://en.wikipedia.org/wiki/Lexicographical_order)exicographical order, and either ascending or descending.
    2. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists.
6. **Hashing Algorithms :**
    1. Hashing is a technique of mapping a large chunk of data into small tables using a hashing function. It is also known as the message digest function. It is a technique that uniquely identifies a specific item from a collection of similar items.
    2. It uses hash tables to store the data in an array format. Each value in the array has been assigned a unique index number. Hash tables use a technique to generate these unique index numbers for each value stored in an array format. This technique is called the hash technique.
    3. You only need to find the index of the desired item, rather than finding the data. With indexing, you can quickly scan the entire list and retrieve the item you wish. Indexing also helps in inserting operations when you need to insert data at a specific location. No matter how big or small the table is, you can update and retrieve data within seconds.
7. **Divide and Conquer Algorithms :**
    1. A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.
    2. In Divide and Conquer algorithms, the idea is to solve the problem in two sections, the first section divides the problem into subproblems of the same type. The second section is to solve the smaller problem independently and then add the combined result to produce the final answer to the problem.
    3. It follows three steps:
        1. Divide
        2. Conquer or Solve
        3. Combine
8. **Greedy Algorithms :**
    1. A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment. It doesn't worry whether the current best result will bring the overall optimal result.
    2. The algorithm never reverses the earlier decision even if the choice is wrong. It works in a top-down approach.
    3. This algorithm may not produce the best result for all the problems. It's because it always goes for the local best choice to produce the global best result.
    4. In many problems, a greedy strategy does not produce an optimal solution, but a greedy heuristic can yield locally optimal solutions that approximate a globally optimal solution in a reasonable amount of time.
9. **Dynamic Programming Algorithms :**
    1. Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.
    2. This algorithm uses the concept of using the already found solution to avoid repetitive calculation of the same part of the problem. It divides the problem into smaller overlapping subproblems and solves them.
    3. If any problem can be divided into subproblems, which in turn are divided into smaller subproblems, and if there are overlapping among these subproblems, then the solutions to these subproblems can be saved for future reference. In this way, efficiency of the CPU can be enhanced. This method of solving a solution is referred to as dynamic programming.
10. **Randomized Algorithms :**
    1. A randomized algorithm is a technique that uses a source of randomness as part of its logic. It is typically used to reduce either the running time, or time complexity; or the memory used, or space complexity, in a standard algorithm. The algorithm works by generating a random number, r, within a specified range of numbers, and making decisions based on r's value.
    2. In the randomized algorithm we use a random number so it gives immediate benefit. The random number helps in deciding the expected outcome.
    3. A randomized algorithm could help in a situation of doubt by flipping a coin or a drawing a card from a deck in order to make a decision. Similarly, this kind of algorithm could help speed up a brute force process by randomly sampling the input in order to obtain a solution that may not be totally optimal, but will be good enough for the specified purposes.