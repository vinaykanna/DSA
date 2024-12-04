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