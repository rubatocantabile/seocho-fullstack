let ballLeft = 0
let ballTop = 0
const moveDiff = 8
const ball = document.getElementById("ball")

function onKeyDown() {
  const keyCode = event.keyCode
  if (keyCode === 39) {  
    ballLeft = ballLeft + moveDiff
    ball.style.left = `${ballLeft}px`
  } else if (keyCode === 40) {
    ballTop = ballTop + moveDiff
    ball.style.top = `${ballTop}px`
  } else if (keyCode === 38) {
    ballTop = ballTop - moveDiff
    ball.style.top = `${ballTop}px`
  } else if (keyCode === 37) {
    ballLeft = ballLeft - moveDiff
    ball.style.left = `${ballLeft}px`
  }
  
}
document.onkeydown = onKeyDown