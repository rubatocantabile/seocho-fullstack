// db.js
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

db.raw("한 번 씩 다해보세요 ㅎㅎㅎ")
.then((res) => {
  console.log(res)
})

