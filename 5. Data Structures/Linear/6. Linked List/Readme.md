# Linked List

**A linked list** is a linear data structure in which elements are stored in nodes and each node points to the next node in the list. Unlike arrays, linked lists do not have a fixed size and can grow or shrink as needed. They are commonly used in computer science for implementing dynamic data structures and managing memory allocation.

Like arrays, linked lists are also linear data structures but in linked lists elements are not stored at contiguous memory locations. They can be stored anywhere in the memory but for sequential access, the nodes are linked to each other using pointers.

There are several types of linked lists : 

1. **Singly linked lists :** In a singly linked list, each node has a reference to the next node in the list. 
2. **Doubly linked lists :** In a doubly linked list, each node has a reference to both the previous and next nodes in the list.
3. **Circular linked lists**. Circular linked lists are similar to singly or doubly linked lists, but the last node points back to the first node, creating a circular structure.

Linked lists can be used to implement various data structures, such as stacks, queues, and hash tables. They can also be used in algorithms like graph traversal and dynamic programming.

Linked lists have some advantages over arrays. For example, inserting or deleting an element in a linked list can be done in constant time, while the same operation in an array takes linear time since all the elements after the insertion/deletion point must be shifted. Additionally, linked lists can be easily expanded or contracted, as they do not have a fixed size like arrays.

Linked lists can also be used to implement recursive algorithms, since each node can be treated as a sub-problem that can be solved using the same algorithm. This property makes linked lists particularly useful for problems that involve recursive data structures, such as trees and graphs.

Another advantage of linked lists is that they can be easily combined with other data structures to create more complex data structures. For example, a hash table can be implemented using an array of linked lists, where each linked list contains the elements that hash to the same value. This allows for efficient insertion, deletion, and search operations, while still maintaining the flexibility of linked lists.

However, linked lists also have some disadvantages. Unlike arrays, linked lists do not provide constant time access to individual elements, since accessing an element requires traversing the list from the beginning. Additionally, linked lists require extra memory to store the next or previous pointers.

However, despite these disadvantages, linked lists remain a useful data structure in many situations. For example, they are often used in situations where dynamic memory allocation is required, such as in operating systems and database systems.

### **Singly Linked List Implementation :**

```tsx
public class LL<T> {
    private Node<T> head;
    private Node<T> tail;
    public int size = 0;

    public void insertFirst(T value) {
        Node<T> node = new Node<>(value);
        node.next = head;
        head = node;

        if (tail == null) {
            tail = head;
        }

        size += 1;
    }

    public void insertLast(T value) {
        if (tail == null) {
            insertFirst(value);
            return;
        }

        Node<T> node = new Node<>(value);
        tail.next = node;
        tail = node;
        size += 1;
    }

    public void insert(int index, T value) {
        if (index == 0) {
            insertFirst(value);
            return;
        }

        if (index == size) {
            insertLast(value);
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        Node<T> node = new Node<>(value);
        node.next = prevNode.next;
        prevNode.next = node;
        size += 1;
    }

    public T deleteFirst() {
        T val = head.value;
        head = head.next;

        if (head == null) {
            tail = null;
        }

        size -= 1;
        return val;
    }

    public T deleteLast() {
        if (size <= 1) {
            return deleteFirst();
        }

        T val = tail.value;
        Node<T> secondLast = head;

        while (secondLast.next != tail) {
            secondLast = secondLast.next;
        }

        tail = secondLast;
        tail.next = null;
        size -= 1;

        return val;
    }

    public T delete(int index){
        if(index == 0){
            return deleteFirst();
        }

        if(size == index){
            return deleteLast();
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        T value = prevNode.next.value;
        prevNode.next =  prevNode.next.next;

        size -= 1;
        return value;
    }

    public int search(T val){
        Node<T> node = head;

        for(int i = 1; i <= size; i++){
            if(node.value == val){
                return i;
            }
            node = node.next;
        }

        return -1;
    }

    public void display() {
        System.out.print("Start => ");

        Node<T> node = head;

        while (node != null) {
            System.out.print(node.value + " => ");
            node = node.next;
        }

        System.out.println("End");
    }

    private class Node<T> {
        private T value;
        private Node<T> next;

        Node(T value) {
            this.value = value;
        }
    }
}

//======================================
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        LL<Integer> linkedList = new LL<Integer>();

        linkedList.insertFirst(10);
        linkedList.insertFirst(5);
        linkedList.insertFirst(7);
        linkedList.insertFirst(2);
        linkedList.display();
        linkedList.insert(2, 12);
        linkedList.insert(0, 111);
        linkedList.insert(6, 177);
        linkedList.display();
        linkedList.deleteFirst();
        linkedList.display();
        linkedList.deleteLast();
        linkedList.display();
        System.out.println(linkedList.delete(1));
        linkedList.display();
        System.out.println("Search: "+linkedList.search(10));
    }
}
```

### Singly Linked List Implementation - II

```tsx
public class LL2<T> {
    private Node<T> head;
    public int size = 0;

    public void insertFirst(T value) {
        Node<T> node = new Node<>(value);
        node.next = head;
        head = node;
        size += 1;
    }

    public void insertLast(T value) {
        if (head == null) {
            insertFirst(value);
            return;
        }

        Node<T> node = new Node<>(value);
        Node lastNode = get(size - 1);
        lastNode.next = node;
        size += 1;
    }

    public void insert(int index, T value) {
        if (index == 0) {
            insertFirst(value);
            return;
        }

        if (index == size) {
            insertLast(value);
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        Node<T> node = new Node<>(value);
        node.next = prevNode.next;
        prevNode.next = node;
        size += 1;
    }

    public T deleteFirst() {
        T val = head.value;
        head = head.next;
        size -= 1;
        return val;
    }

    public void deleteLast() {
        if (size <= 1) {
            deleteFirst();
            return;
        }

        Node<T> secondLast = get(size - 2);
        secondLast.next = null;
        size -= 1;
    }

    public void delete(int index) {
        if (index == 0) {
            deleteFirst();
            return;
        }

        if (size == index) {
            deleteLast();
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        T value = prevNode.next.value;
        prevNode.next = prevNode.next.next;
        size -= 1;
    }

    public Node get(int index) {
        Node<T> node = head;

        for (int i = 0; i < index; i++) {
            node = node.next;
        }

        return node;
    }

    public int search(T val) {
        Node<T> node = head;

        for (int i = 1; i <= size; i++) {
            if (node.value == val) {
                return i;
            }
            node = node.next;
        }

        return -1;
    }

    public void display() {
        System.out.print("Start => ");

        Node<T> node = head;

        while (node != null) {
            System.out.print(node.value + " => ");
            node = node.next;
        }

        System.out.println("End");
    }

    private class Node<T> {
        private T value;
        private Node<T> next;

        Node(T value) {
            this.value = value;
        }
    }

}

//=================================================
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        LL2<Integer> linkedList = new LL2<Integer>();

        linkedList.insertFirst(10);
        linkedList.insertFirst(5);
        linkedList.insertFirst(7);
        linkedList.display();
        linkedList.insertLast(2);
        linkedList.insertLast(13);
        linkedList.display();
        linkedList.insert(2, 12);
        linkedList.insert(1, 111);
        linkedList.insert(0, 14);
        linkedList.insert(8, 120);
        linkedList.insert(6, 177);
        linkedList.display();
        linkedList.deleteFirst();
        linkedList.display();
        linkedList.deleteLast();
        linkedList.display();
        linkedList.delete(1);
        linkedList.display();
    }
}
```

### **Doubly Linked List Implementation :**

```tsx
public class DLL<T> {
    private Node<T> head;
    private Node<T> tail;
    public int size = 0;

    public void insertFirst(T value) {
        Node<T> node = new Node<T>(value);
        node.next = head;
        node.prev = null;

        if(head != null){
            head.prev = node;
        }

        head = node;

        if (tail == null) {
            tail = head;
        }

        size += 1;
    }

    public void insertLast(T value) {
        if (tail == null) {
            insertFirst(value);
            return;
        }

        Node<T> node = new Node<>(value);
        node.prev = tail;
        tail.next = node;
        tail = node;
        size += 1;
    }

    public void insert(int index, T value) {
        if (index == 0) {
            insertFirst(value);
            return;
        }

        if (index == size) {
            insertLast(value);
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        Node<T> node = new Node<>(value);
        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next.prev = node;
        prevNode.next = node;

        size += 1;
    }

    public T deleteFirst() {
        T val = head.value;
        head = head.next;
        head.prev = null;

        if (head == null) {
            tail = null;
        }

        size -= 1;
        return val;
    }

    public T deleteLast() {
        if (size <= 1) {
            return deleteFirst();
        }

        T val = tail.value;
        Node<T> secondLast = tail.prev;
        tail = secondLast;
        tail.next = null;

        return val;
    }

    public T delete(int index){
        if(index == 0){
            return deleteFirst();
        }

        if(size == index){
            return deleteLast();
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        T value = prevNode.next.value;
        prevNode.next.next.prev = prevNode;
        prevNode.next =  prevNode.next.next;

        size -= 1;
        return value;
    }

    public int search(T val){
        Node<T> node = head;

        for(int i = 1; i <= size; i++){
            if(node.value == val){
                return i;
            }
            node = node.next;
        }

        return -1;
    }

    public String find(T val){
        Node<T> node = head;

        for(int i = 1; i <= size; i++){
            if(node.value == val){
                String prevRes = node.prev != null ?  node.prev.value.toString() : "null";
                String nextRes = node.next != null ?  node.next.value.toString() : "null";
                String result = "Prev - " + prevRes + " // " + "Value - " + node.value + " // " + "Next - " + nextRes;
                return result;
            }
            node = node.next;
        }

        return null;
    }

    public void display() {
        System.out.print("Start => ");

        Node<T> node = head;

        while (node != null) {
            System.out.print(node.value + " => ");
            node = node.next;
        }

        System.out.println("End");
    }

    private class Node<T> {
        private T value;
        private Node<T> next;
        private  Node<T> prev;

        Node(T value) {
            this.value = value;
        }
    }
}

//===========================
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        DLL<Integer> linkedList = new DLL<Integer>();

        linkedList.insertFirst(10);
        linkedList.insertFirst(5);
        linkedList.insertFirst(7);
        linkedList.insertLast(2);
        linkedList.insertLast(13);
        linkedList.display();
        linkedList.insert(2, 12);
        linkedList.insert(1, 111);
        linkedList.insert(0, 14);
        linkedList.insert(8, 120);
        linkedList.insert(6, 177);
        linkedList.display();
        linkedList.deleteFirst();
        linkedList.display();
        linkedList.deleteLast();
        linkedList.display();
        linkedList.delete(1);
        linkedList.display();
        System.out.println("Search: " + linkedList.find(5));
    }
}
```

### Circular Linked List :

```tsx
public class CLL<T> {
    private Node<T> head;
    private Node<T> tail;
    public int size = 0;

    public void insertFirst(T value) {
        Node<T> node = new Node<T>(value);
        node.next = head;
        head = node;

        if (tail == null) {
            tail = node;
        }

        tail.next = node;
        size += 1;
    }

    public void insertLast(T value) {
        if (tail == null) {
            insertFirst(value);
            return;
        }

        Node<T> node = new Node<>(value);
        tail.next = node;
        node.next = head;
        tail = node;
        size += 1;
    }

    public void insert(int index, T value) {
        if (index == 0) {
            insertFirst(value);
            return;
        }

        if (index == size) {
            insertLast(value);
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        Node<T> node = new Node<>(value);
        node.next = prevNode.next;
        prevNode.next = node;
        size += 1;
    }

    public void deleteFirst() {
        if (head == null) {
            return;
        }

        head = head.next;

        if (head == null) {
            tail = null;
        }

        if (tail != null) {
            tail.next = head;
        }

        size -= 1;
    }

    public void deleteLast() {
        if (size <= 1) {
            deleteFirst();
            return;
        }

        Node<T> secondLast = head;

        while (secondLast.next != tail) {
            secondLast = secondLast.next;
        }

        tail = secondLast;
        tail.next = head;
        size -= 1;
    }

    public void delete(int index){
        if(index == 0){
             deleteFirst();
             return;
        }

        if(size == index){
            deleteLast();
            return;
        }

        Node<T> prevNode = head;

        for (int i = 1; i < index; i++) {
            prevNode = prevNode.next;
        }

        prevNode.next =  prevNode.next.next;
        size -= 1;
    }

    public int search(T val) {
        Node<T> node = head;

        for (int i = 1; i <= size; i++) {
            if (node.value == val) {
                return i;
            }
            node = node.next;
        }

        return -1;
    }

    public String find(T val) {
        Node<T> node = head;

        for (int i = 1; i <= size; i++) {
            if (node.value == val) {
                String nextRes = node.next != null ? node.next.value.toString() : "null";
                String result = "Value - " + node.value + " // " + "Next - " + nextRes;
                return result;
            }
            node = node.next;
        }

        return null;
    }

    public void display() {
        System.out.print("Start => ");

        Node<T> node = head;

        for (int i = 1; i <= size; i++) {
            System.out.print(node.value + " => ");
            node = node.next;
        }

        System.out.println("End");
    }

    private class Node<T> {
        private T value;
        private Node<T> next;

        Node(T value) {
            this.value = value;
        }
    }
}

//==============================================
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        CLL<Integer> linkedList = new CLL<Integer>();

        linkedList.insertFirst(10);
        linkedList.insertFirst(5);
        linkedList.insertFirst(7);
        linkedList.display();
        linkedList.insertLast(2);
        linkedList.insertLast(13);
        linkedList.display();
        linkedList.insert(2, 12);
        linkedList.insert(1, 111);
        linkedList.insert(0, 14);
        linkedList.insert(8, 120);
        linkedList.insert(6, 177);
        linkedList.display();
        linkedList.deleteFirst();
        linkedList.display();
        linkedList.deleteLast();
        linkedList.display();
        linkedList.delete(1);
        linkedList.display();
        System.out.println("Search: " + linkedList.find(5));
    }
}
```