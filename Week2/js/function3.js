// 정수를 가지고 있는 배열을 받아서 가장 작은 값 반환
function minus(array) {
  let min = array[0]
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
    }
  }
  return min
}

console.log(minus([1, 2, 3, 5, -100]))