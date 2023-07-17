import React, { useState, useRef } from "react";

// state manageMent using EventHandler
function StateManagement() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function todoHandler() {
    const newTodo = inputRef.current.value;
    setTodos([newTodo, ...todos]);
    inputRef.current.value = "";
  }

  return (
    <>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={todoHandler}>Add ToDo</button>
        </div>
      </div>
    </>
  );
}

export default StateManagement;
