import './App.css';
import React, {useState, useEffect} from "react"
import Axios from "axios"


function App() {
  
  const [todos,setTodos] = useState('')
  const [todoList, setTodoList] = useState([])
  

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setTodoList(response.data)
    })
  })
  

  function submitTodo(){
    Axios.post('http://localhost:3001/api/insert', {
      todo: todos
    })

    setTodoList([
      ...todoList,
      {todo: todos}
    ])
  }


  return (
    <div className="App">
      <div className="form">
      <h1>To Do List</h1>
        <input 
        className="form input" 
        type="text" 
        data-testid="inputId"
        onChange={(e) => {
          setTodos(e.target.value)
        }}
        />
        <button onClick={submitTodo}>Submit</button>

        {todoList.map((val) => {
          return(
            <div className="card">
              <h3>{val.allTasks}</h3>
            </div>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;
