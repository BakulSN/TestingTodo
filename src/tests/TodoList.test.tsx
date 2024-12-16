import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";
import { mockContext } from "./test-utils/mockTodoContext";

describe("TodoList Component", () => {
  it("renders tasks and filters them correctly", () => {
    render(
      <TodoContext.Provider value={mockContext}>
        <TodoList />
      </TodoContext.Provider>
    );

    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Active Todos"));
    expect(screen.queryByText("Test Todo 2")).not.toBeInTheDocument();
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed Todos"));
    expect(screen.queryByText("Test Todo 1")).not.toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });
});
