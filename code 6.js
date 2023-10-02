//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(char) {
    return ['+', '-', '*', '/', '^'].includes(char);
  }
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
    
    for (let char of postfixExpression) {
      if (isOperator(char)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefix = char + operand1 + operand2;
        stack.push(prefix);
      } else {
        stack.push(char);
      }
    }
    
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpr = "23+5*";
  const prefixExpr = postfixToPrefix(postfixExpr);
  console.log("Postfix Expression:", postfixExpr);
  console.log("Prefix Expression:", prefixExpr);
  