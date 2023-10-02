//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
    
    // Iterate through the prefix expression in reverse order
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const char = prefixExpression[i];
      
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infix = `(${operand1}${char}${operand2})`;
        stack.push(infix);
      } else {
        stack.push(char);
      }
    }
    
    return stack.pop();
  }
  
  // Example usage:
  const prefixExpr = "+*23/456";
  const infixExpr = prefixToInfix(prefixExpr);
  console.log("Prefix Expression:", prefixExpr);
  console.log("Infix Expression:", infixExpr);
  