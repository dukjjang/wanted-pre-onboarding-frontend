import React, { useRef } from "react";
import { usePreventGoBack } from "../hooks/usePreventGoBack";
import TodoList from "components/TodoList";
import { useTodos } from "hooks/useTodos";
import TodoInput from "components/TodoInput";

const Todos = () => {
  usePreventGoBack();
  const { mutateDelete, mutateTodos, todos, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className=" mt-10 flex flex-col justify-center items-center w-full h-full">
      <TodoInput mutateTodos={mutateTodos} />
      <TodoList
        todos={todos && todos}
        mutateTodos={mutateTodos}
        mutateDelete={mutateDelete}
      />
    </div>
  );
};
export default Todos;
