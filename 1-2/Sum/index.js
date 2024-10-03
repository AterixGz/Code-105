
function sum(number) {
    if (number == 0 ) {
        return 0;
    }
    else {
        return number + sum(number - 1);
    }
}
let data = document.getElementById("data")
let result = document.getElementById("result")


function whenclick() {
    let sucdata = parseFloat(data.value)
    result.innerHTML = `${sum(sucdata)}`
}