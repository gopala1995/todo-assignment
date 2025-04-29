import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");
  console.log(task);

  const handleAddTodo = () => {
    // Fix the app to display list of all tasks
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        label: task.trim(),
        checked: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
