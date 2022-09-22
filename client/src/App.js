import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form">
      <h1>To Do List</h1>
        <input className="form input" type="text" data-testid="inputId"/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
