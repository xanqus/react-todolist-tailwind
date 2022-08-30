import React, { useRef, useState } from "react";
import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "기상",
      checked: false,
    },
    {
      id: 2,
      content: "밥먹기",
      checked: true,
    },
    {
      id: 3,
      content: "눈 축제",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <TodoInput todos={todos} setTodos={setTodos} nextId={nextId} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
