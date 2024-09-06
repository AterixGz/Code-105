let stack = [];

function addToStack(value) {
    stack.push(value);
    updateDisplay();
}

function removeLast() {
    stack.pop();
    updateDisplay();
}

function clearDisplay() {
    stack = [];
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = stack.join(' ');
}

function calculate() {
    try {
        let expression = stack.join('');
        let result = eval(expression);  // ใช้ eval คำนวณค่า (ควรระวังการใช้ eval)
        document.getElementById('display').value = result;
        stack = [result];  // เก็บผลลัพธ์ใน stack
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
