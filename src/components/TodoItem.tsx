import React from "react";
import { useState } from "react";
import { useTodoContext } from "../context/useTodoContext";
import { TodoItemProps } from "../types/types";
import { STodoItem, STodoTitle } from "../styles/AllStyles.styles";

const TodoItem = React.memo(({ todo }: TodoItemProps) => {
  const { onSave, onToggle, onDelete } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(todo.title);

  const handleSaveEditing = () => {
    if (editingTitle.trim()) {
      onSave(todo.id, editingTitle);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingTitle(todo.title);
  };

  return (
    <>
      {isEditing ? (
        <STodoItem>
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />

          <div>
            <button onClick={handleSaveEditing}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </STodoItem>
      ) : (
        <STodoItem>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <STodoTitle $completed={todo.completed}>{todo.title}</STodoTitle>
          </label>

          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </STodoItem>
      )}
    </>
  );
});

export default TodoItem;
