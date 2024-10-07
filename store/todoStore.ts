import { create } from "zustand";
import { persist } from "zustand/middleware";

type Filter = "all" | "active" | "completed";

interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

type TodoStore = {
  isEmptyEntry: boolean;
  todoArray: Todo[];
  newTask: string;
  filter: Filter;
  setIsEmptyEntry: (bol: boolean) => void;
  setNewTask: (task: string) => void;
  updateTodoArray: () => void;
  setTodoArray: (todos: Todo[]) => void;
  deleteTask: (index: number) => void;
  toggleIsCompleted: (id: number) => void;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      isEmptyEntry: false,
      todoArray: [],
      newTask: "",
      filter: "all",

      setIsEmptyEntry: (bol: boolean) => set({ isEmptyEntry: bol }),
      setNewTask: (task: string) => set({ newTask: task }),

      updateTodoArray: () =>
        set((state) => {
          // Check for empty task
          if (state.newTask.trim() === "") {
            return { isEmptyEntry: true };
          }

          // Clear the empty entry state
          set({ isEmptyEntry: false });

          const newTodo: Todo = {
            id: Date.now(),
            task: state.newTask,
            isCompleted: false,
          };

          // Add the new task to the array and reset the newTask
          return { todoArray: [newTodo, ...state.todoArray], newTask: "" };
        }),
      setTodoArray: (todos: Todo[]) => set({ todoArray: todos }),

      deleteTask: (index) =>
        set((state) => ({
          todoArray: state.todoArray.filter((_, i) => i !== index),
        })),
      toggleIsCompleted: (id: number) =>
        set((state) => ({
          todoArray: state.todoArray.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        })),
      setFilter: (filter: Filter) => set({ filter }),
      clearCompleted: () =>
        set((state) => ({
          todoArray: state.todoArray.filter((todo) => !todo.isCompleted),
        })),
    }),
    {
      name: "todoly-storage",
      getStorage: () => localStorage,
    }
  )
);
