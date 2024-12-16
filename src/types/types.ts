import { ReactNode } from "react";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: ITodo;
}

export const enum Filter {
  All = "all",
  Active = "active",
  Completed = "completed",
}

export interface FilterBarProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export interface ITodoContext {
  todos: ITodo[];
  addTodo: (newTodo: ITodo) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onSave: (id: string, newTitle: string) => void;
}

export interface TodoProviderProps {
  children: ReactNode;
}

export interface FilterButtonProps {
  $isActive: boolean;
}
