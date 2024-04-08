let result = document.getElementById("result")

function Sumbackward() {
    let data = parseFloat(document.getElementById("data").value)
    let sum = null
    for (let i = data; i >= 0; i--) {
        sum += i
    }
    data.innerHTML = ""
    result.innerHTML = `ผลรวมของ ${data} =  ${sum}`
}
