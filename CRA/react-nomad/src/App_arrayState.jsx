import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return ; 
    }
    setTodos((currentArray ) => [toDo, ...currentArray] ) ;
    setTodo("");

  }
  console.log("setTodos ::",toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default App;
