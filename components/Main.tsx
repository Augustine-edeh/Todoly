"use client";

import { useState } from "react";

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";

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
    <main className="text-black dark:text-white">
      <section className="flex flex-col gap-y-10">
        <div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              className="w-full rounded py-3 px-5 outline-none bg-very-light-gray-Lfsdl dark:bg-very-dark-desaturated-blue-D text-red-300 text-lg border-0"
              placeholder=" Create a new todo..."
              onChange={changeHandler}
              value={newTask}
            />
          </form>
        </div>

        {/* <ul className="overflow-hidden bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 p-3 rounded-t "> */}
        <ul className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y-5 overflow-auto p-3 rounded-t">
          {todoList &&
            todoList.map((task, index) => (
              <TodoItem index={index} task={task} />
            ))}
        </ul>
      </section>
      <InfoPanel todoList={todoList} />
    </main>
  );
};

export default Main;
