const fieldHeight = 400
const fieldWidth = 700
const dimeter = 100

const maxLeft = fieldWidth - dimeter - 2
const maxTop = fieldHeight - dimeter - 2

const vx = 5
const vy = 5

let running = false
let goRight = true
let goDown = true
let x = fieldWidth / 2
let y = fieldHeight / 2
let angle = 0;

const btn = document.getElementById('ball')
randomNumber = Math.floor(Math.random() * 10)
const rotateball = () => {
    randomNumber = Math.floor(Math.random() * 10)
    rotateball = btn.style.transform = `rotate(${randomNumber}deg)`;
}

const runClick = () => {
    running = !running
}
const calculate = () => {
    if (running) {
        if (goRight) {
            x = x + vx
            if (x >= maxLeft) {
                goRight = false
            }
        } else {
            x = x - vx
            if (x <= 0) {
                goRight = true

            }
        }

        if (goDown) {
            y = y + vy
            if (y >= maxTop) {
                goDown = false

            }

        } else {
            y = y - vy
            if (y <= 0) {
                goDown = true

            }
        }
    }

}

const changeBall = (type) => {
    document.getElementById('ball').className = type;
}
const render = () => {
    const btn = document.getElementById('run')
    if (running) {
        btn.innerHTML = '<span class="bi bi-pause">&nbsp;PAUSE</span>'
        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
        document.getElementById('ball').style.transform = `rotate(${angle}deg)`;
        angle = (angle + 3) % 360
        console.log(angle)
    } else {
        btn.innerHTML = '<span class="bi bi-play">&nbsp;RUN</span>'
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
    }

    document.getElementById('ball').style.left = x + 'px'
    document.getElementById('ball').style.top = y + 'px'


}
const process = () => {
    calculate();
    render();
}

const initial = () => {
    //draw field
    document.getElementById('field').style.height = fieldHeight + 'px'
    document.getElementById('field').style.width = fieldWidth + 'px'

    document.getElementById('ball').style.height = dimeter + 'px'
    document.getElementById('ball').style.width = dimeter + 'px'
}

document.addEventListener('DOMContentLoaded', () => {
    initial();

    setInterval(process, 1000)
})

document.addEventListener("keypress",
    function(event){
        var keyboardInput = event.key;
        console.log(event.key)
        switch(keyboardInput){
            case " ":
                render()
            case "1":
                changeBall('none')
                break;
            case "2":
                changeBall('basketball-pic')
                break;
            case "3":
                changeBall('football-pic')
                break;
            case "4":
                changeBall('volleyball-pic')
                break;
            case "5":
                changeBall('human-pic')
                break;
            case "6":    
                changeBall('cartoon-pic')
                break;
            case "7":
                changeBall('logo-pic')
                break;
        }
    })