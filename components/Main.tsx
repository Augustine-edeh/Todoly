"use client";

import { Reorder, useDragControls } from "framer-motion"; // 103.8k (gzipped: 34k)

import TodoItem from "./TodoItem";
import InfoPanel from "./InfoPanel";
import { useTodoStore } from "@/store/todoStore";
import Input from "./Input";

const Main = () => {
  const todoArray = useTodoStore((state) => state.todoArray);
  const isEmptyEntry = useTodoStore((state) => state.isEmptyEntry);
  const updateTodoArray = useTodoStore((state) => state.updateTodoArray);
  const setTodoArray = useTodoStore((state) => state.setTodoArray);

  const filter = useTodoStore((state) => state.filter);

  const filteredTodos = todoArray.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  const controls = useDragControls();

  return (
    <main className="text-black dark:text-white">
      <section className="flex flex-col sm:gap-y-10 gap-y-9">
        <div className="">
          <Input />

          {isEmptyEntry && (
            <p className="text-[#FFC107]">Kindly enter a task</p>
          )}
        </div>

        <Reorder.Group
          axis="y"
          values={filteredTodos}
          onReorder={setTodoArray}
          className="bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D min-h-96 max-h-96 flex flex-col gap-y-[0.23rem] overflow-y-scroll scrollbar-thin scrollbar-track-very-light-gray-L dark:scrollbar-track-very-dark-desaturated-blue-D scrollbar-thumb-gray-300/70 dark:scrollbar-thumb-slate-700/80 rounded-t-md p-1 md:p-2 "
        >
          {filteredTodos &&
            filteredTodos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                index={index}
                todo={todo}
                isCompleted={todo.isCompleted}
                value={todo}
              />
            ))}
        </Reorder.Group>
      </section>
      <InfoPanel />
    </main>
  );
};

export default Main;
