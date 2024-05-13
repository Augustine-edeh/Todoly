"use client";

import { useState } from "react";

import Filter from "./Filter";
import TodoItem from "./TodoItem";

const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState();

  const changeHandler = (e) => {
    e.preventDefault();

    setNewTask(() => e.target.value.trim());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // add condition: don't add newTask if input value is empty
    newTask.length > 1 ? setTodoList([newTask, ...todoList]) : "";
    setNewTask("");
  };

  return (
    <main className="flex flex-col gap-y-10 text-black dark:text-white">
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="w-full rounded py-3 px-5 outline-none bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D text-red-300 text-lg"
            placeholder=" Create a new todo..."
            onChange={changeHandler}
            value={newTask}
          />
        </form>
      </div>

      <ul className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 flex flex-col gap-y-5 overflow-y-scroll p-3 rounded">
        {todoList &&
          todoList.map((task, index) => <TodoItem index={index} task={task} />)}

        <div className="flex justify-between mt-auto text-dark-grayish-blue-D">
          <div>
            {todoList.length === 1
              ? "1 item left"
              : todoList.length > 1
              ? `${todoList.length} items left`
              : "No item left"}
          </div>
          <Filter className={"hidden md:block"} />
          <div>Clear Completed</div>
        </div>
      </ul>
    </main>
  );
};

export default Main;
