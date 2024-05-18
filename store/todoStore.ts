import { create } from "zustand";

// types.ts
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

type TodoStore = {
  //   count: number;
  todoArray: Todo[];
  newTask: string;
  setNewTask: (task: string) => void;
  updateTodoArray: () => void;
  deleteTask: (index: number) => void;
  toggleIsCompleted: (id: number) => void;
  //   increment: () => void;
  //   incrementAsync: () => Promise<void>;
  //   decrement: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  //   count: 0,
  todoArray: [],
  newTask: "",
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

  //   increment: () => {
  //     set((state) => ({ count: state.count + 1 }));
  //   },

  //   incrementAsync: async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     set((state) => ({ count: state.count + 1 }));
  //   },

  //   decrement: () => {
  //     set((state) => ({ count: state.count - 1 }));
  //   },
}));
