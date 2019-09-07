// 두 수를 받아서 사칙연산 결과를 담은 객체 반환
function add(x, y) {
  return x + y
}

function minus(x, y) {
  return x - y
}

function calculator(x, y) {
  const obj = {
    add: add(x, y),
    minus: minus(x, y),
    multiply: x * y,
    divide: x / y
  }
  return obj
}

console.log(calculator(4, 2))