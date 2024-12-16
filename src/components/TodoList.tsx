import React from "react";
import { useState, useCallback, useMemo } from "react";
import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";
import { useTodoContext } from "../context/useTodoContext";
import { Filter } from "../types/types";
import { STodoList } from "../styles/AllStyles.styles";

const TodoList = () => {
  const { todos } = useTodoContext();
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === Filter.Active) return !todo.completed;
      if (filter === Filter.Completed) return todo.completed;
      return true;
    });
  }, [todos, filter]);

  const showFiltered = useCallback((newFilter: Filter) => {
    setFilter(newFilter);
  }, []);

  const getTitle = useMemo(() => {
    if (!todos.length) return "Add your tasks";
    if (filter === Filter.Completed)
      return `${filteredTodos.length} completed tasks`;
    return `${filteredTodos.length} tasks remaining`;
  }, [todos, filteredTodos.length, filter]);

  return (
    <>
      <FilterBar setFilter={showFiltered} filter={filter} />
      <STodoList>
        <h3>{getTitle}</h3>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </STodoList>
    </>
  );
};

export default React.memo(TodoList);
