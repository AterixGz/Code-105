const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

let currentInput = '';
let operator = '';
let previousInput = '';
let result = 0;

// ฟังก์ชันในการบวก
function add(a, b) {
  return a + b;
}

// ฟังก์ชันในการลบ
function subtract(a, b) {
  return a - b;
}

// ฟังก์ชันในการคูณ
function multiply(a, b) {
  return a * b;
}

// ฟังก์ชันในการหาร
function divide(a, b) {
  if (b === 0) {
    alert("ไม่สามารถหารด้วยศูนย์ได้");
    return 0;
  }
  return a / b;
}

// ฟังก์ชันหลักในการคำนวณ
function calculate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return b;
  }
}

// การอัพเดตหน้าจอ
function updateDisplay() {
  display.value = currentInput;
}

// การจัดการกับการคลิกปุ่ม
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (!isNaN(value) || value === '.') {
      // ถ้าเป็นตัวเลขหรือตัวทศนิยม
      currentInput += value;
      updateDisplay();
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput === '' && previousInput !== '') {
        operator = value;
        return;
      }

      if (previousInput !== '') {
        result = calculate(operator, previousInput, currentInput);
        display.value = result;
        previousInput = result;
      } else {
        previousInput = currentInput;
      }

      operator = value;
      currentInput = '';
    }
  });
});

// การจัดการกับการคลิกปุ่ม =
equals.addEventListener('click', () => {
    debugger
  if (operator === '' || currentInput === '') {
    return;
  }
  result = calculate(operator, previousInput, currentInput);
  display.value = result;
  previousInput = result;
  currentInput = '';
});

// การจัดการกับการคลิกปุ่ม C
clear.addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
});
