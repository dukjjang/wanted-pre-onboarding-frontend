import { UserValues } from "../types/index";
import axios from "../axios/axios";

export const postSignUp = async (endpoint: string, userValues: UserValues) => {
  const { email, password } = userValues;
  const res = await axios.post(`/auth/${endpoint}`, {
    email,
    password,
  });
  return res.data;
};

export const getTodosRequest = async () => {
  const res = await axios.get(`/todos`);
  return res.data;
};

export const postTodo = async (todo: string) => {
  const res = await axios.post("/todos", { todo: todo });
  return res.data;
};

export const putUpdate = async (
  newTodo: string,
  isCompleted: boolean,
  id: number
) => {
  const res = await axios.put(`/todos/${id}`, {
    todo: newTodo,
    isCompleted: isCompleted,
  });
  return res.data;
};

export const deleteTodo = async (id: number) => {
  const res = await axios.delete(`/todos/${id}`);
  return res.data;
};
