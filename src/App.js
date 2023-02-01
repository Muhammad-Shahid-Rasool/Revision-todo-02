
import './App.css';
import Todoinput from './Todoinput';
import { useState } from 'react';
import Todolist from './Todolist';

const App = () => {
      const [todo,setTodo]=useState("");
    const   [todos,setTodos]=useState([]);
  
const addtodo=()=>{
  if(todo !== ""){
    setTodos([...todos,todo]);
    setTodo("");

  }

};
const deleteTodo = (text) => {
  const newTodos = todos.filter((todo) => {
    return todo !== text;
  });
  setTodos(newTodos);
};
  
  
         return (
    
     <div className="App">
     <Todoinput todo={todo} sttodo={setTodo} addtodo={addtodo}/>
     <Todolist  list={todos} remove={deleteTodo}/>
    </div>
  );
}

export default App;
