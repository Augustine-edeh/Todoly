"use client";

import { useTodoStore } from "@/store/todoStore";
import AddTaskButton from "./AddTaskButton";

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

      <AddTaskButton />
    </form>
  );
};

export default Input;
