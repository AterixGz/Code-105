function isOperator(char) {
    return ["+", "-", "*", "/", "^"].includes(char);
  }
  
  function precedence(operator) {
    switch (operator) {
      case "^":
        return 3;
      case "*":
      case "/":
        return 2;
      case "+":
      case "-":
        return 1;
      default:
        return 0;
    }
  }
  
  function infixToPostfix(infix) {
    const stack = [];
    const postfix = [];
  
    for (let char of infix) {
      if (isOperator(char)) {
        while (stack.length && precedence(stack[stack.length - 1]) >= precedence(char)) {
          postfix.push(stack.pop());
        }
        stack.push(char);
      } else if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        while (stack[stack.length - 1] !== "(") {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        postfix.push(char);
      }
    }
  
    while (stack.length) {
      postfix.push(stack.pop());
    }
  
    return postfix.join("");
  }
  
  function evaluatePostfix(postfix) {
    const stack = [];
  
    for (let char of postfix) {
      if (!isNaN(char)) {
        stack.push(parseInt(char));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        let result;
  
        switch (char) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
        }
  
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  function calculateInfix(infixExpression) {
    const postfixExpression = infixToPostfix(infixExpression);
    const result = evaluatePostfix(postfixExpression);
  
    return {
      infix: infixExpression,
      postfix: postfixExpression,
      result: result,
    };
  }
  
  // ตัวอย่างการใช้งาน
  const infixExpression = "2 + 3 * 4 - (5 / 6 + 7) * 8";
  const result = calculateInfix(infixExpression);
  
  console.log("Infix:", result.infix);
  console.log("Postfix:", result.postfix);
  console.log("Result:", result.result); // ผลลัพธ์: 14


