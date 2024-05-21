"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";

const Input = () => {
  const newTaskk = useTodoStore((state) => state.newTask);
  const setNewTaskk = useTodoStore((state) => state.setNewTask);

  const updateTodoArray = useTodoStore((state) => state.updateTodoArray);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(), updateTodoArray();
      }}
      className="relative flex items-center bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D rounded-md shadow-xl"
    >
      <input
        type="text"
        className="relative w-full rounded-md py-3 px-5 outline-none bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D text-red-300 text-lg border-0 peer"
        placeholder=" Create a new todo..."
        onChange={(e) => setNewTaskk(e.target.value)}
        value={newTaskk}
        id="input"
      />

      <div className="absolute right-3 h-8 w-8 bg-very-dark-desaturated-blue-D p-1 peer-focus:block hidden">
        <label
          htmlFor="input"
          className="block h-full w-full border-[0.1px] border-very-dark-grayish-blue-L rounded-full cursor-pointer"
          // onClick={submitHandler}
        />
      </div>
    </form>
  );
};

export default Input;
