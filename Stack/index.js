// ฟังก์ชันที่ใช้ในการตรวจสอบว่าเป็นตัวอักษรตัวเลขหรือไม่
function isOperand(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// ฟังก์ชันที่ใช้ในการกำหนดความสำคัญของตัวดำเนินการ
function precedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0;
    }
}

// ฟังก์ชันที่ใช้ในการแปลง infix เป็น postfix
function infixToPostfix(infix) {
    let postfix = '';
    let stack = [];

    for (let i = 0; i < infix.length; i++) {
        let currentChar = infix[i];

        if (isOperand(currentChar)) {
            postfix += currentChar;
        } else if (currentChar === '(') {
            stack.push(currentChar);
        } else if (currentChar === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // นำอักขระ '(' ออกจาก stack
        } else {
            while (stack.length && precedence(stack[stack.length - 1]) >= precedence(currentChar)) {
                postfix += stack.pop();
            }
            stack.push(currentChar);
        }
    }

    // นำตัวอักษรที่เหลือใน stack มาต่อท้าย postfix
    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

// ตัวอย่างการใช้งาน
const infixExpression = "a+b*c-(d/e+f*g*h)";
const postfixExpression = infixToPostfix(infixExpression);
console.log("Postfix expression:", postfixExpression); // ผลลัพธ์ที่ควรได้: "abc*+de/fgh*+*-"
