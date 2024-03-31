let data = document.getElementById("data")
let result = document.getElementById("result")
let numbers = []

function add() {
    numbers.push(data.value)
    data.value = ""
    result.innerHTML = numbers
}

let evenProduct = 1;
let oddProduct = 1;

function results() {
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenProduct *= num;
        } else {
            oddProduct *= num;
        }
    }
    console.log(`ผลคูณของเลขคู่: ${evenProduct}`);
    console.log(`ผลคูณของเลขคี่: ${oddProduct}`);
}


