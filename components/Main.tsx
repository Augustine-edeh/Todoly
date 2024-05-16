"use client";

import { useState } from "react";

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";
import { useCounterStore } from "@/store/store";

const Main = () => {
  const [newTask, setNewTask] = useState("");

  const todoArray = useCounterStore((state) => state.todoArray);
  const updateTodoArray = useCounterStore((state) => state.updateTodoArray);

  const changeHandler = (e) => {
    e.preventDefault();

    setNewTask(() => e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // updating todoArray (Zustand)
    newTask.trim().length > 0 ? updateTodoArray(newTask) : "";

    setNewTask("");
  };

  return (
    <main className="text-black dark:text-white">
      <section className="flex flex-col gap-y-10">
        <div>
          <form
            onSubmit={submitHandler}
            className="relative flex items-center bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D"
          >
            <input
              type="text"
              className="relative w-full rounded py-3 px-5 outline-none bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D text-red-300 text-lg border-0 peer"
              placeholder=" Create a new todo..."
              onChange={changeHandler}
              value={newTask}
              id="input"
            />

            <div className="absolute right-3 h-8 w-8 bg-very-dark-desaturated-blue-D p-1 peer-focus:block hidden">
              <label
                htmlFor="input"
                className="block h-full w-full border-[0.1px] border-very-dark-grayish-blue-L rounded-full cursor-pointer"
                onClick={submitHandler}
              />
            </div>
          </form>
        </div>

        {/* <ul className="overflow-hidden bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 p-3 rounded-t "> */}
        <ul className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y- overflow-auto rounded-t scrollbar-thin scrollbar-track-very-dark-desaturated-blue-D scrollbar-thumb-slate-700/80">
          {todoArray.length}
          {todoArray &&
            todoArray.map((task, index) => (
              <TodoItem index={index} task={task} />
            ))}
        </ul>
      </section>
      <InfoPanel />
    </main>
  );
};

export default Main;
