import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation(); // Prevent toggle when deleting
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={addTodo} />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            style={{ marginBottom: "8px" }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={(e) => deleteTodo(todo.id, e)}
              data-testid={`delete-${todo.id}`}
              style={{ marginLeft: "8px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
