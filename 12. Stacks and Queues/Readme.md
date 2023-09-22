## Stack

A **stack** is a linear data structure that follows the principle of **Last In First Out (LIFO)**. This means the last element inserted inside the stack is removed first.

You can think of the stack data structure as the pile of plates on top of another.

Here, you can:

1. Put a new plate on top
2. Remove the top plate

And, if you want the plate at the bottom, you must first remove all the plates on top. This is exactly how the stack data structure works

Putting an item on top of the stack is called **push** and removing an item is called **pop**.

Basic Operations of Stack :

- **Push**: Add an element to the top of a stack
- **Pop**: Remove an element from the top of a stack
- **IsEmpty**: Check if the stack is empty
- **IsFull**: Check if the stack is full
- **Peek**: Get the value of the top element without removing it

**Implemntation :**

```tsx
import java.util.ArrayList;

public class CustomStack<T> {
    private final  ArrayList<T> list = new ArrayList<>();

    public void push(T value){
        list.add(value);
    }

    public T pop(){
       return list.remove(list.size() - 1);
    }

    public T peek(){
        return list.get(list.size() - 1);
    }

    public boolean isEmpty(){
        return list.size() == 0;
    }

    public void display(){
        System.out.println("-- Start --");

        for (int i = (list.size() - 1); i >= 0; i--) {
            System.out.println(list.get(i));
        }

        System.out.println("-- End --");
    }
}

//=============================
import java.util.*;

public class Main {
    public static void main(String[] args) {
        CustomStack<String> customStack = new CustomStack<>();
        System.out.println(customStack.isEmpty());
        customStack.push("vinay");
        customStack.push("kishan");
        customStack.push("madhu");
        customStack.push("upender");
        customStack.display();
        System.out.println(customStack.pop());
        customStack.display();
        System.out.println(customStack.peek());
        System.out.println(customStack.isEmpty());
    }
}
```

## Queue

A **queue** is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.

Queue follows the **First In First Out (FIFO)** rule - the item that goes in first is the item that comes out first.

A Queue is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket.

The operation of adding an element to the rear of the queue is known as *enqueue*, and the operation of removing an element from the front is known as *dequeue*. Other operations may also be allowed, often including a *peek* or *front* operation that returns the value of the next element to be dequeued without dequeuing it.

Basic Operations of Queues :

- **Enqueue**: Add an element to the end of the queue
- **Dequeue**: Remove an element from the front of the queue
- **IsEmpty**: Check if the queue is empty
- **IsFull**: Check if the queue is full
- **Peek**: Get the value of the front of the queue without removing it

Types of Queues :

- **Simple Queue -** In a simple queue, insertion takes place at the rear and removal occurs at the front. It strictly follows the FIFO (First in First out) rule.
- **Double Ended Queue -** In a double ended queue, insertion and removal of elements can be performed from either from the front or rear. Thus, it does not follow the FIFO (First In First Out) rule.
- **Circular Queue -** A circular queue is the extended version of a regular queue where the last element is connected to the first element. Thus forming a circle-like structure. The circular queue solves the major limitation of the normal queue **(with size)**. In a normal queue, after a bit of insertion and deletion, there will be non-usable empty space.
- **Priority Queue -**  A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

**Simple Queue Implementation :**

```tsx
import java.util.ArrayList;

public class SimpleQueue<T> {
    ArrayList<T> list = new ArrayList<>();

    public void enqueue(T value){
        list.add(value);
    }

    public void dequeue(){
        list.remove(0);
    }

    public boolean isEmpty(){
        return list.size() == 0;
    }

    public T peek(){
        return list.get(0);
    }

    public void display(){
        System.out.println(list.toString());
    }
}

//==============================
import java.util.*;

public class Main {
    public static void main(String[] args) {
        SimpleQueue<String> simpleQueue = new SimpleQueue<>();
        System.out.println(simpleQueue.isEmpty());
        simpleQueue.enqueue("vinay");
        simpleQueue.enqueue("kishan");
        simpleQueue.enqueue("madhu");
        simpleQueue.enqueue("upender");
        simpleQueue.display();
        simpleQueue.dequeue();
        simpleQueue.display();
        System.out.println(simpleQueue.peek());
        System.out.println(simpleQueue.isEmpty());
    }
}
```

**Doubly Ended Queue implementation:**

```tsx
import java.util.ArrayList;

public class DoubleEndedQueue<T> {
    ArrayList<T> list = new ArrayList<>();

    public void addLast(T value){
        list.add(value);
    }

    public void addFirst(T value){
        list.add(0, value);
    }

    public void removeFirst(){
        list.remove(0);
    }

    public void removeLast() {
        list.remove(list.size() - 1);
    }

    public boolean isEmpty(){
        return list.size() == 0;
    }

    public T peekFirst(){
        return list.get(0);
    }

    public T peekLast(){
        return list.get(list.size() - 1);
    }

    public void display(){
        System.out.println(list.toString());
    }
}

//=================================
import java.util.*;

public class Main {
    public static void main(String[] args) {
        DoubleEndedQueue<String> queue = new DoubleEndedQueue<>();
        queue.addFirst("Kishan");
        queue.addFirst("Upender");
        queue.addFirst("Prashanth");
        queue.addLast("Vinay");
        queue.addLast("Shiva");
        queue.addLast("Sathish");
        queue.display();
        queue.removeFirst();
        queue.display();
        queue.removeLast();
        queue.display();
        System.out.println(queue.peekFirst());
        System.out.println(queue.peekLast());
    }
}
```

**Circular Queue Implementation :**

```tsx
public class CircularQueue {
    private int[] data;
    private static final int DEFAULT_SIZE = 10;

    private int front = 0;
    private int end = 0;
    private int size = 0;

    CircularQueue() {
        this(DEFAULT_SIZE);
    }

    CircularQueue(int size) {
        data = new int[size];
    }

    public void insert(int value) throws QueueException {
        if (isFull()) {
            throw new QueueException("Queue is full");
        }

        data[end++] = value;
        end = end % data.length;
        size++;
    }

    public int remove() throws QueueException {
        if (isEmpty()) {
            throw new QueueException("Queue is Empty");
        }

        int removed = data[front++];
        front = front % data.length;
        size--;
        return removed;
    }

    public int peek() throws QueueException {
        if (isEmpty()) {
            throw new QueueException("Queue is Empty");
        }

        return data[front];
    }

    public boolean isFull() {
        return size == data.length;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void display() throws QueueException {
        if (isEmpty()) {
            throw new QueueException("Queue is Empty");
        }

        System.out.println("-- Start --");

        int i = front;

        do {
            System.out.println(data[i]);
            i++;
            i = i % data.length;
        } while (i != end);

        System.out.println("-- end --");

    }

    private class QueueException extends Exception{
        QueueException(String error){
            super(error);
        }
    }
}

//========================================
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        CircularQueue queue = new CircularQueue(5);
        queue.insert(3);
        queue.insert(10);
        queue.insert(7);
        queue.insert(5);
        queue.insert(4);
        queue.display();
        queue.remove();
        queue.display();
        queue.insert(19);
        queue.display();
    }
}
```