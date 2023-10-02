// Q8. Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsClosed(codeSnippet) {
    const stack = [];
    const bracketPairs = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    for (let char of codeSnippet) {
      if (char in bracketPairs) {
        // If it's an opening bracket, push it onto the stack
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        // If it's a closing bracket, pop from the stack and check if it matches
        const lastBracket = stack.pop();
        if (bracketPairs[lastBracket] !== char) {
          return false; // Mismatched brackets
        }
      }
    }
  
    // If the stack is empty, all brackets are closed properly
    return stack.length === 0;
  }
  
  // Example usage:
  const codeSnippet1 = 'if (x > 0) { console.log("Positive"); }';
  const codeSnippet2 = 'function someFunction() { return [1, 2, 3); }';
  
  console.log(areBracketsClosed(codeSnippet1)); // true
  console.log(areBracketsClosed(codeSnippet2)); // false
  