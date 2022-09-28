import './App.css';
import React, {useState, useEffect} from "react"
import Axios from "axios"


function App() {
  
  const [todos,setTodos] = useState([])
  const [todoList, setTodoList] = useState([])
  const [todoComplete,setTodoComplete] = useState(false)
  
  

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

  function handleChecked(){
    setTodoComplete(!todoComplete)
    console.log(todoComplete)
  }

  function deleteTodo(item){
    Axios.delete(`http://localhost:3001/api/delete/${item}`)
}


  return (
    <div>
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
        {/* <button onClick={(e) => {deleteTodo(e.allTasks)}}>Clear Completed</button> */}

       

        {todoList.map((val) => {
          return(
            <div>
               <input 
               type="checkbox" 
               defaultChecked={todoComplete}
               onChange={handleChecked}
               />
               {val.allTasks}
               <button onClick={() => {deleteTodo(val.allTasks)}}>Clear Completed</button>
              
              
            </div>
          )
        })}
        
      </div>
    
  );
}

export default App;
