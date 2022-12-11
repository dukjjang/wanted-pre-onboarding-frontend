import React, { useState } from "react";
import { Todo } from "../types/index";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  mutateTodos: (newTodo: Todo) => void;
  mutateDelete: (id: number) => void;
}

const TodoList = ({ todos, mutateTodos, mutateDelete }: Props) => {
  return (
    <>
      {todos &&
        todos.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              mutateTodos={mutateTodos}
              mutateDelete={mutateDelete}
            />
          );
        })}
    </>
  );
};

export default TodoList;
