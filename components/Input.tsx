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
      className="relative flex items-center bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D rounded-md shadow-xl"
    >
      <input
        type="text"
        className="relative w-full rounded-md py-3 pl-5 pr-14 outline-none bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D text-gray-600 dark:text-white/70 text-lg border-0 peer focus:ring-1 focus:outline-0 focus:ring-black dark:focus:ring-blue-600"
        placeholder=" Create a new todo..."
        onChange={(e) => setNewTaskk(e.target.value)}
        value={newTaskk}
        id="input"
      />

      <button
        onClick={updateTodoArray}
        type="button"
        className="flex place-items-center absolute right-2 h-10 w-10 bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D p-1 rounded-full border border-very-dark-grayish-blue-L rounded-ful"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          className="h-8 w-8"
        >
          <path
            fill="currentColor"
            d="M30 17H19V6a1 1 0 1 0-2 0v11H6a1 1 0 0 0-1 1a.91.91 0 0 0 1 .94h11V30a1 1 0 1 0 2 0V19h11a1 1 0 0 0 1-1a1 1 0 0 0-1-1"
            className="clr-i-outline clr-i-outline-path-1"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      </button>
    </form>
  );
};

export default Input;
