import "./App.css";
import React, { useState } from "react";
import TodoListitem from "./components/TodoListitem";
import CreateTodoItem from "./components/CreateTodoItem";

function App() {
  const [todos, setTodos] = useState([{ title: "공부1시간", done: false }]);
  return (
    <div className="App">
      <CreateTodoItem setTodos={setTodos} />
      {todos.map((todo) => {
        const { title } = todo;
        return <TodoListitem title={title} />;
      })}
    </div>
  );
}

export default App;
