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
    } else if (char === " ") {
      let magic = char
    } 
    else {
      postfix.push(char);
    }
  }

  while (stack.length) {
    postfix.push(stack.pop()); //?
  }

  let postfixresult =  postfix.join("");
  console.log(postfixresult)
  // evaluatePostfix(postfixresult)
}



function evaluatePostfix(expression) {
  const stack = [];

  // สร้างฟังก์ชันสำหรับการดำเนินการทางคณิตศาสตร์
  const applyOperator = (operator, operand1, operand2) => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
    }
  };

  // แยกนิพจน์ Postfix เป็นอาร์เรย์ของตัวอักษร
  const tokens = expression.split(' ');
  console.log(tokens)

  // วนลูปผ่านทุกๆ ตัวอักษรในนิพจน์
  for (const char of tokens) {
    
  }

  tokens.forEach(token => {
    if (!isNaN(token)) { // ถ้าเป็นตัวเลข
      stack.push(parseFloat(token)); // ใส่เข้าไปใน stack
    } else { // ถ้าเป็นตัวดำเนินการ
      const operand2 = stack.pop(); // ดึงตัวเลขออกจาก stack
      const operand1 = stack.pop(); // ดึงตัวเลขออกจาก stack
      const result = applyOperator(token, operand1, operand2); // ดำเนินการทางคณิตศาสตร์
      stack.push(result); // ใส่ผลลัพธ์เข้าไปใน stack
    }
  });

  // ผลลัพธ์สุดท้ายที่เหลือใน stack คือผลลัพธ์ของการประเมินค่า
  let result = stack.pop();
  console.log(result)
}

// ตัวอย่างการใช้งาน
// debugger
// const expression = "2 3 4 * + 5 6 / 7 + 8 * -";
// const result = evaluatePostfix(expression);
// console.log("ผลลัพธ์ของการประเมินค่า:", result);


// ตัวอย่างการใช้งาน
debugger
const infixExpression = "2 + 3 * 4 - (5 / 6 + 7) * 8";
infixToPostfix(infixExpression)

// console.log("Infix:", result.infix);
// console.log("Postfix:", result.postfix);
// console.log("Result:", result.result); // ผลลัพธ์: 14