"use client";

import { Reorder } from "framer-motion"; // 103.8k (gzipped: 34k)

import { useState } from "react";

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";
import { useTodoStore } from "@/store/todoStore";
import Input from "./Input";

const Main = () => {
  const todoArray = useTodoStore((state) => state.todoArray);
  const updateTodoArray = useTodoStore((state) => state.updateTodoArray);
  const setTodoArray = useTodoStore((state) => state.setTodoArray);

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

        <Reorder.Group
          axis="y"
          values={filteredTodos}
          onReorder={setTodoArray}
          className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y-[0.23rem] overflow-auto rounded- scrollbar-thin scrollbar-track-very-dark-desaturated-blue-D scrollbar-thumb-slate-700/80 rounded-t-md"
        >
          {filteredTodos &&
            filteredTodos.map((todo, index) => (
              <Reorder.Item value={todo} key={todo.id}>
                <TodoItem
                  key={todo.id}
                  index={index}
                  todo={todo}
                  isCompleted={todo.isCompleted}
                />
              </Reorder.Item>
            ))}
        </Reorder.Group>
      </section>
      <InfoPanel />
    </main>
  );
};

export default Main;
