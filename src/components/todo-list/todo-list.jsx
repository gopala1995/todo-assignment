import * as React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix the app to delete a task
    const updatedTodos = todos.filter((todo) => todo[0].id !== id);
    setTodos(updatedTodos);
  };

  const toggleCheck = (id) => {
    // Fix the app to mark a task as completed
    const updatedTodos = todos.map((todo) =>
      todo[0].id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 5) {
      toggleCheck(id);
    }
  };
  console.log(todos);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem[0].id}
              label={todoItem[0].label}
              checked={todoItem[0].checked}
              onClick={() => toggleCheck(todoItem[0].id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem[0].id)}
              onDelete={() => handleDelete(todoItem[0].id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re up for a challenge!
        </div>
      )}
    </div>
  );
};
