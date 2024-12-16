import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { TodoContext } from "../context/TodoContext";
import { mockContext } from "./test-utils/mockTodoContext";

describe("TodoItem Component", () => {
  it("toggles task completion", () => {
    render(
      <TodoContext.Provider value={mockContext}>
        <TodoItem todo={mockContext.todos[0]} />
      </TodoContext.Provider>
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockContext.onToggle).toHaveBeenCalledWith("1");
  });

  it("deletes a task", () => {
    render(
      <TodoContext.Provider value={mockContext}>
        <TodoItem todo={mockContext.todos[0]} />
      </TodoContext.Provider>
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockContext.onDelete).toHaveBeenCalledWith("1");
  });

  it("edits a task title", () => {
    render(
      <TodoContext.Provider value={mockContext}>
        <TodoItem todo={mockContext.todos[0]} />
      </TodoContext.Provider>
    );

    fireEvent.click(screen.getByText("Edit"));
    const input = screen.getByDisplayValue("Test Todo 1");

    fireEvent.change(input, { target: { value: "Updated Title" } });
    fireEvent.click(screen.getByText("Save"));

    expect(mockContext.onSave).toHaveBeenCalledWith("1", "Updated Title");
  });
});
