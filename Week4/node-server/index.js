const knex = require("knex")
const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test_db"
  }
})

const express = require("express")
const app = express()
// 이게 있어야 req.body를 사용할 수 있습니다
app.use(express.json())


app.set("views", __dirname + "/static")
app.engine("html", require("ejs").renderFile)

// POST http://localhost:8000/user
/**
 * 요청 바디
 * {
 *   name: 이름, (문자열)
 *   age: 나이 (숫자)
 * }
 * 
 * 성공 200
 * 실패 500
 */
app.post("/user", (req, res) => {
  // body랑 query랑 달라요!! query는 /user?name=이름
  // body는 HTTP body에 오는거에요!

  // req.body를 사용하기 위해서는 해줘야할게 있기 때문
  const name = req.body.name // ";drop database"
  const age = req.body.age
  // 실제로는 빠방한 검증로직 추가

  db.raw(`INSERT INTO user (name, age, created_date_time) VALUES("${name}", ${age}, now())`)
  .then((response) => {
    res.status(200).end("SUCCESS")
  })
  .catch((error) => {
    console.error(error)
    res.status(500).end("FAILED")
  })
})

// 서버 http://localhost:8000/user?name=태현로 GET 메소드가 들어오면,
// DB에 쿼리에 조건을 추가해 직접 날려서 나온 결과를 반환한다
app.get("/user", (req, res) => {
  const name = req.query.name
  db.raw(`SELECT * FROM user WHERE name="${name}"`)
  .then((result) => {
    res.status(200).send(result[0])
  })
})

app.put("/user/name", (req, res) => {
  const oldName = req.body.oldName
  const newName = req.body.newName
  db.raw(`UPDATE user SET name="${newName}" WHERE name="${oldName}"`)
  .then((result) => {
    res.status(200).end("SUCCESS")
  })
  .catch((error) => {
    console.log(error)
    res.status(500).end("FAILED")
  })
})

app.delete("/user", (req, res) => {
  const id = req.query.id
  db.raw(`DELETE FROM user WHERE id=${id}`)
  .then((result) => {
    res.status(200).end("SUCCESS")
  })
  .catch((error) => {
    console.log(error)
    res.status(500).end("FAILED")
  })
})

/*

// http://localhost:8000/animal?name=123
app.get("/animal", (req, res) => {
  const animalName = req.query.name
  if (typeof animalName === "undefined") {
    res.status(400).end("use /animal?name=blabla!")
  }

  const existedAnimals = ["dog", "cat"]
  if (existedAnimals.includes(animalName)) {
    res.status(200).render(`${animalName}.html`)
  } else {
    res.status(404).end(`${animalName} does not exist`)
  }
})
*/


const server = app.listen(8000, () => {
  console.log("Server is running.")
})