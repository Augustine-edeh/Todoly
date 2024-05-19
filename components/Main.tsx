"use client";

import { useState } from "react";

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";
import { useTodoStore } from "@/store/todoStore";
import Input from "./Input";

const Main = () => {
  const todoArray = useTodoStore((state) => state.todoArray);
  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = todoArray.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  return (
    <main className="text-black dark:text-white">
      <section className="flex flex-col gap-y-10">
        <Input />

        {/* <ul className="overflow-hidden bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 p-3 rounded-t "> */}
        <ul className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y- overflow-auto rounded-t scrollbar-thin scrollbar-track-very-dark-desaturated-blue-D scrollbar-thumb-slate-700/80">
          {filteredTodos &&
            filteredTodos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                isCompleted={todo.isCompleted}
                // id={todo.id}
              />
            ))}
        </ul>
      </section>
      <InfoPanel />
    </main>
  );
};

export default Main;
