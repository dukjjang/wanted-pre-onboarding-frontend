import React, { FormEvent, useRef, useState } from "react";
import { Todo } from "../types/index";
import { deleteTodo, putUpdate } from "../apis/request";

interface Props {
  todoItem: Todo;
  mutateTodos: (newTodo: Todo) => void;
  mutateDelete: (id: number) => void;
}

const TodoItem = ({ todoItem, mutateTodos, mutateDelete }: Props) => {
  const { todo, isCompleted, id } = todoItem;
  const [checked, setChecked] = useState(isCompleted);
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoText, setTodoText] = useState(todo);

  const handleCheckBoxChange = () => {
    if (!isEditMode) return;
    setChecked((prev) => !prev);
  };

  const handleEditMode = async () => {
    setIsEditMode((prev) => !prev);
    if (isEditMode) {
      try {
        const res = await putUpdate(todoText, checked, id);
        mutateTodos(res);
      } catch (err) {
        alert("업데이트 요청이 실패하였습니다. 잠시후 다시 시도해주세요");
      }
    }
  };

  const handleTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
    mutateDelete(id);
  };
  return (
    <section className="mt-7">
      <div className="flex justify-between items-center border w-80 h-15 p-3">
        <input
          type="checkBox"
          onChange={handleCheckBoxChange}
          checked={checked}
          className="w-5 h-5 "
        />
        <input
          className="outline-none"
          readOnly={isEditMode ? false : true}
          value={todoText}
          onChange={handleTodoText}
        />
        {!isEditMode && (
          <button
            className="bg-red-400 rounded p-1 "
            onClick={handleDeleteTodo}
          >
            삭제
          </button>
        )}
        <button className="bg-green-300 rounded p-1" onClick={handleEditMode}>
          {isEditMode ? "제출" : "수정"}
        </button>
        {isEditMode && (
          <button
            className="bg-[#C762F1] rounded p-1"
            onClick={() => setIsEditMode(false)}
          >
            취소
          </button>
        )}
      </div>
    </section>
  );
};

export default TodoItem;
