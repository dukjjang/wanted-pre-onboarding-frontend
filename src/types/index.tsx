export interface UserValues {
  [key: string]: string;
  email: string;
  password: string;
}

export interface Todos {
  todos: Todo[];
}

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
