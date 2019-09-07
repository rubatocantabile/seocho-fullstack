const oneSecondInterval = setInterval(() => {
  console.log("1초가 또 지났습니다")
}, 1000)

setTimeout(() => {
  clearInterval(oneSecondInterval)
}, 3100)