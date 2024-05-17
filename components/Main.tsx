"use client";

import { useState } from "react";

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";
import { useTodoStore } from "@/store/todoStore";
import Input from "./Input";

const Main = () => {
  const todoArray = useTodoStore((state) => state.todoArray);

  return (
    <main className="text-black dark:text-white">
      <section className="flex flex-col gap-y-10">
        <Input />

        {/* <ul className="overflow-hidden bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 p-3 rounded-t "> */}
        <ul className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y- overflow-auto rounded-t scrollbar-thin scrollbar-track-very-dark-desaturated-blue-D scrollbar-thumb-slate-700/80">
          {todoArray &&
            todoArray.map((task, index) => (
              <TodoItem key={index} index={index} task={task} />
            ))}
        </ul>
      </section>
      <InfoPanel />
    </main>
  );
};

export default Main;
