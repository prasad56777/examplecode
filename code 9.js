// Q9. Write a program to reverse a stack.
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
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
  }
  
  function reverseStack(stack) {
    if (stack.isEmpty()) {
      return;
    }
  
    const temp = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, temp);
  }
  
  function insertAtBottom(stack, item) {
    if (stack.isEmpty()) {
      stack.push(item);
      return;
    }
  
    const temp = stack.pop();
    insertAtBottom(stack, item);
    stack.push(temp);
  }
  
  // Example usage:
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  
  console.log("Original Stack:", myStack.items);
  
  reverseStack(myStack);
  
  console.log("Reversed Stack:", myStack.items);
  