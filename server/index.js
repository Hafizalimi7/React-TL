const express = require ('express')
const app = express()
const mysql = require("mysql")


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "toDoList"
})


app.get("/", (req,res) => {
  const sql = "INSERT INTO tasks (allTasks) VALUES ('COOKING');"
  db.query(sql, (err,result) => {
    console.log(`number of items entered database: ${result.affectedRows}`)
    res.send("Backend")
  })
})

app.listen(3001, () => {
  console.log('running on port 3001')
})

