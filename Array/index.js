let data = document.getElementById("data")
let inData = document.getElementById("inputData")
let result = document.getElementById("result")
let sucdata = parseFloat(data.value)
let numbers = []

function add() {
    numbers.push(parseFloat(data.value))
    console.log(parseFloat(data.value))
    data.value = ""
    inData.innerHTML = "ข้อมูล : " + numbers
}
function remove() {
    numbers.pop(data.value)
    console.log(numbers)
    inData.innerHTML = "ข้อมูล : " + numbers
}

function removeAll() {
    numbers = []
    data.value = ""
    result.innerHTML = ""
    inData.innerHTML = ""
}


function results() {
    let evenProduct = 1;
    let oddProduct = 1;
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenProduct *= num;
        } else {
            oddProduct *= num;
        }
    }
    result.innerHTML = `ผลคูณของเลขคู่: ${evenProduct} <br> ผลคูณของเลขคี่: ${oddProduct}`
}


