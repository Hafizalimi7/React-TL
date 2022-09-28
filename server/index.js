const express = require ('express')
const app = express()
const mysql = require("mysql")
const cors = require('cors')
const bodyParser = require('body-parser')


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "toDoList"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post("/api/insert", (req,res) => {
  const todo = req.body.todo

  const sqlInsert = 
    "INSERT INTO tasks (allTasks) VALUES (?);"
  db.query(sqlInsert, todo, (err,result) => {
    console.log(`number of item entered the database ${result.affectedRows}`)
  })
})


app.get("/api/get", (req,res) => {
  const sqlGet = "SELECT * FROM tasks;"
  db.query(sqlGet, (err,result) => {
    res.send(result)
  })
})

app.delete("api/delete/allTasks", (req,res) => {
  const todo = req.params.allTasks

  const sql =
   "DELETE FROM tasks WHERE allTasks = ?;"
  db.query(sql, todo, (err,result) => {
    console.log(err)
    console.log(`number of item removed from the database ${result.affectedRows}`)
  })
})

app.listen(3001, () => {
  console.log('running on port 3001')
})

