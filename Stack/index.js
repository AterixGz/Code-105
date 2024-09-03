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
      while (stack[stack.length - 1] !== "(") { //ถ้าตัวด้านบนสุดไม่ = ( ให้ pop ออกมาเข้า postfix จนกว่าจะเจอ และหยุดทำงาน
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

  let sucPostfix = postfix.join(""); //รวม array เข้าด้วยกันให้เป็น String


  console.log(`Infix = ${infix}`)
  sucPostfix = sucPostfix.replace(/\s/g, '')
  console.log(`Postfix = ${sucPostfix}`)
  let showPData = document.getElementById("postfixData")
  showPData.innerHTML = `Postfix : ${sucPostfix}`;
  evaluatePostfix(sucPostfix);
  return sucPostfix
}



// เอา postfix ไปคิดเป็นผลลัพธ์

function evaluatePostfix(postfix) {
  const stack = [];
  
  for (let char of postfix) {
    if (!isNaN(char)) {
      stack.push(parseInt(char));
    } 
    else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (char) {
        case "^":
          result = operand1 ** operand2;
          break;
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
  
  let result = stack.pop();
  console.log(result)
  let showEData = document.getElementById("evaluateData")
  showEData.innerHTML = `ผลลัพธ์ : ${result}`;
  return result
}


let data = document.getElementById("data")
let showIData = document.getElementById("infixData")
let showPData = document.getElementById("postfixData")
let showEData = document.getElementById("evaluateData")
let sucdata = data.value

// ตัวอย่างการใช้งาน

function result(){
  sucdata = data.value
  infixToPostfix(sucdata);
  showIData.innerHTML = `Infix : ${data.value}`;
  data.value = ""
}

function removeAll(){
  data.value = ""
  showIData.innerHTML = ""
  showEData.innerHTML = ""
  showPData.innerHTML = ""
}
