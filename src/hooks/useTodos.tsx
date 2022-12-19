import { getTodosRequest } from "apis/request";
import { useEffect, useState } from "react";
import { Todo } from "../types/index";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllTodos: () => void = async () => {
    const res = await getTodosRequest();
    setTodos(res);
  };

  const mutateTodos = (newTodo: Todo) => {
    const target = todos.filter((todo) => {
      return newTodo.id === todo.id;
    });

    if (!target.length) {
      setTodos((prev: Todo[]) => {
        return [...prev, newTodo];
      });
    }

    if (target.length) {
      const findIndex = todos.findIndex((todo) => todo.id === newTodo.id);
      let copiedTodos = [...todos];

      copiedTodos[findIndex].todo = newTodo.todo;
      copiedTodos[findIndex].isCompleted = newTodo.isCompleted;

      setTodos(copiedTodos);
    }
  };

  const mutateDelete = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllTodos();
    setIsLoading(false);
  }, []);

  return { mutateDelete, mutateTodos, isLoading, todos };
};
