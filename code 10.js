// Q10. Write a program to find the smallest number using a stack.
class Stack {
    constructor() {
      this.items = [];
      this.minStack = []; // Auxiliary stack to track minimum values
    }
  
    push(item) {
      this.items.push(item);
  
      // Update the minimum stack
      if (
        this.minStack.length === 0 ||
        item <= this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.push(item);
      }
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
  
      // If the popped item is the minimum, remove it from the minimum stack
      if (this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const myStack = new Stack();
  myStack.push(3);
  myStack.push(5);
  myStack.push(2);
  myStack.push(1);
  
  console.log("Minimum Element:", myStack.getMin()); // Output: 1
  