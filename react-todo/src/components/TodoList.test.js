import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Cleaning")).toBeInTheDocument();
  expect(screen.getByText("Drawing")).toBeInTheDocument();
  expect(screen.getByText("Coding")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Task name"), {
    target: { value: "New Task" },
  });
  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "New Desc" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Cleaning").closest("div");
  expect(todo).not.toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteBtn = screen.getByText("Delete");
  fireEvent.click(deleteBtn);
  expect(screen.queryByText("Cleaning")).not.toBeInTheDocument();
});