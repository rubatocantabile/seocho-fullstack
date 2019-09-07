const resultArray = [
  {
    print: "덧셈",
    key: "add"
  },
  {
    print: "뺄셈",
    key: "minus"
  },
  {
    print: "곱하기",
    key: "multiply"
  },
  {
    print: "나누기",
    key: "divide"
  }
]

function calculator(x, y) {
  const obj = {
    add: x + y,
    minus: x - y,
    multiply: x * y,
    divide: x / y
  }
  return obj
}

const button = document.getElementById("cal-button")
button.addEventListener("click", () => {
  const numInput1 = document.getElementById("num1")
  const numInput2 = document.getElementById("num2")

  const num1 = Number(numInput1.value)
  const num2 = Number(numInput2.value)

  const result = calculator(num1, num2)

  // 우리가 해야 할건, result라는 데이터를 기반으로 HTML 만들기
  const div = document.getElementById("cal-result")
  const newUL = document.createElement("ul")
  
  for (let i = 0; i < resultArray.length; i++) {
    const LI = document.createElement("li")
    LI.textContent = `${resultArray[i].print} 결과는 ${result[resultArray[i].key]}입니다`
    newUL.appendChild(LI)
  }
  
  div.appendChild(newUL)
})