import { ITodo, ITodoContext } from "../../types/types";

export const mockTodos: ITodo[] = [
  { id: "1", title: "Test Todo 1", completed: false },
  { id: "2", title: "Test Todo 2", completed: true },
];

export const mockContext: ITodoContext = {
  todos: mockTodos,
  addTodo: jest.fn(),
  onToggle: jest.fn(),
  onDelete: jest.fn(),
  onSave: jest.fn(),
};
