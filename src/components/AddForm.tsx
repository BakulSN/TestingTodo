import { useEffect, useRef, useState } from "react";
import { useTodoContext } from "../context/useTodoContext";
import { ITodo } from "../types/types";
import { STodoForm } from "../styles/AllStyles.styles";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim()) {
      const newTodo: ITodo = {
        id: uuidv4(),
        title: title.trim(),
        completed: false,
      };

      addTodo(newTodo);
      setTitle("");
      inputRef.current?.focus();
    }
  };

  return (
    <STodoForm onSubmit={handleAddTodo}>
      <input
        type="text"
        value={title}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add New Task"
      />

      <button type="submit">Add</button>
    </STodoForm>
  );
};

export default AddForm;
