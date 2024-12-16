import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "../components/AddForm";
import { TodoContext } from "../context/TodoContext";
import { mockContext } from "./test-utils/mockTodoContext";

describe("AddForm Component", () => {
  it("renders and adds a new todo", () => {
    render(
      <TodoContext.Provider value={mockContext}>
        <AddForm />
      </TodoContext.Provider>
    );

    const input = screen.getByPlaceholderText("Add New Task");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(mockContext.addTodo).toHaveBeenCalledWith(
      expect.objectContaining({ title: "New Task", completed: false })
    );
    expect(input).toHaveValue("");
  });
});
