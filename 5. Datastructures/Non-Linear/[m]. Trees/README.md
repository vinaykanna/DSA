# Trees

A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges. Other data structures such as arrays, linked list, stack, and queue are linear data structures that store data sequentially. In order to perform any operation in a linear data structure, the time complexity increases with the increase in the data size. But, it is not acceptable in today's computational world. Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure.

*A **tree data structure** is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search. It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes.*

In computer science, a **tree** is a widely used abstract data type that represents a hierarchical tree structure with a set of connected nodes. Each node in the tree can be connected to many children (depending on the type of tree), but must be connected to exactly one parent, except for the *root* node, which has no parent (i.e., the root node as the top-most node in the tree hierarchy). These constraints mean there are no cycles or "loops" (no node can be its own ancestor), and also that each child can be treated like the root node of its own subtree, making recursion a useful technique for tree traversal. 

In contrast to linear data structures, many trees cannot be represented by relationships between neighboring nodes (parent and children nodes of a node under consideration if they exists) in a single straight line (called edge or link between two adjacent nodes).

![Tree](./tree.png)

### **Applications**

- File systems for:
    - Directory structure used to organize subdirectories and files (symbolic links create non-tree graphs, as do multiple hard links to the same file or directory)
    - The mechanism used to allocate and link blocks of data on the storage device
- Abstract syntax trees for computer languages
- Class hierarchy or "inheritance tree" showing the relationships among classes in object-oriented programming; [multiple inheritance](https://en.wikipedia.org/wiki/Multiple_inheritance) produces non-tree graphs
- Document Object Models ("DOM tree") of XML and HTML documents
- Search trees store data in a way that makes an efficient [search algorithm](https://en.wikipedia.org/wiki/Search_algorithm) possible via tree traversal
    - A binary search tree is a type of binary tree
- JSON and YAML documents can be thought of as trees, but are typically represented by nested lists and dictionaries.

### **Terminology**

**Node :** A node is a structure which may contain data and connections to other nodes, sometimes called **edges** or **links**. Each node in a tree has zero or more **child nodes**, which are below it in the tree (by convention, trees are drawn with *descendants* going downwards). A node that has a child is called the child's **parent node** (or superior). All nodes have exactly one parent, except the topmost **root node**, which has none. A node might have many **ancestor nodes**, such as the parent's parent. Child nodes with the same parent are **sibling nodes**. Typically siblings have an order, with the first one conventionally drawn on the left. Some definitions allow a tree to have no nodes at all, in which case it is called *empty*.

An **internal node** (also known as an **inner node**, **inode** for short, or **branch node**) is any node of a tree that has child nodes. Similarly, an **external node** (also known as an **outer node**, **leaf node**, or **terminal node**) is any node that does not have child nodes.

The **height** of a node is the length of the longest downward path to a leaf from that node. The height of the root is the height of the tree. The **depth** of a node is the length of the path to its root (i.e., its *root path*). Thus the root node has depth zero, leaf nodes have height zero, and a tree with only a single node (hence both a root and leaf) has depth and height zero. Conventionally, an empty tree (tree with no nodes, if such are allowed) has height −1.

Each non-root node can be treated as the root node of its own **subtree**, which includes that node and all its descendants.

**Neighbor :** Parent or child. ****

**Ancestor :** A node reachable by repeated proceeding from child to parent.

**Descendant :** A node reachable by repeated proceeding from parent to child. Also known as *subchild*.

**Degree:** For a given node, its number of children. A leaf has necessarily degree zero.

**Degree of tree :** The degree of a tree is the maximum degree of a node in the tree.

**Distance :** The number of edges along the shortest path between two nodes.

**Level :** The level of a node is the number of edges along the unique path between it and the root node. This is the same as depth. ****

**Width :** The number of nodes in a level.

**Breadth :** The number of leaves.

**Forest :** A set of one or more disjoint trees.

**Ordered tree :** A rooted tree in which an ordering is specified for the children of each vertex.

**Size of a tree :** Number of nodes in the tree.

**Height of a Node :** The height of a node is the length of the longest downward path to a leaf from that node.

**Height of a Tree :** The height of a Tree is the height of the root node or the depth of the deepest node.

**Depth of a Node :** The depth of a node is the length of the path to its root 

### Types of Tree

1. Binary Tree
2. Binary Search Tree
3. AVL Tree
4. Segment Tree
5. B-Tree
6. B+ Tree
7. Red-Black Tree