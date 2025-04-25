import React from "react";
import "./App.css";
import { TodoForm } from "./components/todo-form/todo-form";
import { TodoResults } from "./components/todo-result/todo-result";
import { TodoList } from "./components/todo-list/todo-list";
import { TodosContext } from "./todo-context";


function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="root">
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
