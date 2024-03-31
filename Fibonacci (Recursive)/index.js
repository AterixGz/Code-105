function fibonacci(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

let data = document.getElementById("data")
let result = document.getElementById("result")

function results() {
    console.log(data.value)
    console.log("Fibonacci(6) =", fibonacci(data.value)); // ผลลัพธ์: 5
    result.innerHTML = `Fibonacci(${data.value}) = `+fibonacci(data.value)
    data.value = ""
}

// // ตัวอย่างการใช้งาน
// console.log("Fibonacci(1) =", fibonacci(1)); // ผลลัพธ์: 0
// console.log("Fibonacci(2) =", fibonacci(2)); // ผลลัพธ์: 1
// console.log("Fibonacci(6) =", fibonacci(6)); // ผลลัพธ์: 5
