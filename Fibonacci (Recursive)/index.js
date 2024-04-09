function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 1;
    } 
    else if (n > 2){
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

function fibonacci(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    } 
    else if (n > 2){
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

let data = document.getElementById("data")
let result = document.getElementById("result")

function results() {
    result.innerHTML = `Fibonacci(${data.value}) = `+ fibonacci(data.value)
    data.value = ""
}