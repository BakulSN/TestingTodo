import { useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import { ITodo, TodoProviderProps } from "../types/types";

const LOCAL_STORAGE_KEY = "todo-app-tasks";

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: ITodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const onToggle = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onSave = (id: string, newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const value = { todos, addTodo, onToggle, onDelete, onSave };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
