import { postTodo } from "apis/request";
import React, { FormEvent, useRef } from "react";
import { Todo } from "types";

interface Props {
  mutateTodos: (newTodo: Todo) => void;
}

const TodoInput = ({ mutateTodos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const currentInputData = inputRef.current!.value;
    try {
      const res = await postTodo(currentInputData);
      mutateTodos(res);
      inputRef.current!.value = "";
    } catch (err) {
      alert("todo 추가 전송이 실패하였습니다. 잠시후 다시 시도해주세요");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className=" border px-5 py-2"
        placeholder="write todo"
      />
      <button className=" bg-[#C762F1] p-2 rounded"> 추가</button>
    </form>
  );
};

export default TodoInput;
