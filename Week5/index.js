const express = require("express")
const knex = require("knex")
const app = express()

// CORS 설정 해제
const cors = require("cors")
app.use(cors())

// HTTP req body를 파싱해준다
app.use(express.json())

// DB 연결
const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test_db"
  }
})

// API를 만들어줘야 한다
// localhost:9000/todo_list POST
// 성공시 "OK" 반환, 실패시 "FAILED" 반환

// 보통 POST는 req.body를 사용합니다!!! -> 저장정보는 소중하니까요!
app.post("/todo_list", (req, res) => {
  const name = req.body.name
  const todo = req.body.todo
  db.raw(`INSERT INTO todo_list (name, todo, done) VALUES ("${name}", "${todo}", 0)`)
  .then((response) => {
    res.status(200).send("OK")
  })
  .catch((error) => {
    console.error(error)
    res.status(500).send("FAILED")
  })
})

// localhost:9000/todo_list?name=${name} GET
app.get("/todo_list", (req, res) => {
  const name = req.query.name
  // then이 사실은 동기로 처리하세요~
  db.raw(`SELECT * FROM todo_list WHERE name="${name}"`)
  .then((response) => {
    // response[0] 결과가 담겨 있어요~
    res.status(200).send(response[0])
  })
  .catch((error) => {
    console.error(error)
    res.status(500).send("FAILED")
  })
  
})



// 서버를 켜야 됨
app.listen(9000, () => {
  console.log("서버가 실행되었습니다.") 
})