// 두 문자열을 받아 대소문자 구분 없이 같은지 다른지 반환하는 함수
// toUpperCase : 문자열을 모두 대문자로 만들어버린다
function compareStr(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase()
}

console.log(compareStr("ABC", "abc"))
console.log(compareStr("ABCD", "ABC"))