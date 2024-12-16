import { renderHook, act } from "@testing-library/react";
import { TodoProvider } from "../context/TodoProvider";
import { useTodoContext } from "../context/useTodoContext";
import { TodoProviderProps } from "../types/types";

describe("TodoProvider", () => {
  it("adds a new todo", () => {
    const wrapper = ({ children }: TodoProviderProps) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    act(() => {
      result.current.addTodo({ id: "3", title: "New Task", completed: false });
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe("New Task");
  });

  it("toggles a todo", () => {
    const wrapper = ({ children }: TodoProviderProps) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    act(() => {
      result.current.addTodo({ id: "3", title: "New Task", completed: false });
    });

    act(() => {
      result.current.onToggle("3");
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it("deletes a todo", () => {
    const wrapper = ({ children }: TodoProviderProps) => (
      <TodoProvider>{children}</TodoProvider>
    );

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    act(() => {
      result.current.addTodo({ id: "3", title: "New Task", completed: false });
    });

    act(() => {
      result.current.onDelete("3");
    });

    expect(result.current.todos).toHaveLength(0);
  });
});
