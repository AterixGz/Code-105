const ball = document.querySelector('.ball');
const toggleBtn = document.getElementById('toggle-btn');
const changeBallBtn = document.getElementById('change-ball-btn');
let isMoving = true;
let isBasketball = false;

// Toggle ball animation
toggleBtn.addEventListener('click', () => {
  if (isMoving) {
    ball.style.animationPlayState = 'paused';
    toggleBtn.textContent = 'Play';
  } else {
    ball.style.animationPlayState = 'running';
    toggleBtn.textContent = 'Pause';
  }
  isMoving = !isMoving;
});

// Change ball to basketball
changeBallBtn.addEventListener('click', () => {
  if (!isBasketball) {
    ball.classList.add('basketball');
    changeBallBtn.textContent = 'Change to Regular Ball';
  } else {
    ball.classList.remove('basketball');
    changeBallBtn.textContent = 'Change to Basketball';
  }
  isBasketball = !isBasketball;
});
