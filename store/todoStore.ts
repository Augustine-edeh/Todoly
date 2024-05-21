import { create } from "zustand";

type Filter = "all" | "active" | "completed";

// types.ts
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

type TodoStore = {
  todoArray: Todo[];
  newTask: string;
  filter: Filter;
  setNewTask: (task: string) => void;
  updateTodoArray: () => void;
  setTodoArray: (todos: Todo[]) => void; // New method for updating the todo array
  deleteTask: (index: number) => void;
  toggleIsCompleted: (id: number) => void;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todoArray: [],
  newTask: "",
  filter: "all",
  // FIXME: incorrect state updating logic here
  setNewTask: (task: string) => set({ newTask: task }),
  updateTodoArray: () =>
    set((state) => {
      if (state.newTask.trim() === "") return state;
      const newTodo: Todo = {
        id: Date.now(),
        task: state.newTask,
        isCompleted: false,
      };
      return { todoArray: [newTodo, ...state.todoArray], newTask: "" };
    }),
  setTodoArray: (todos: Todo[]) => set({ todoArray: todos }), // New method for setting todo array

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
}));
