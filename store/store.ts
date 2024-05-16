import { create } from "zustand";

type CounterStore = {
  count: number;
  todoArray: Array<string>;
  newTask: string;
  setNewTask: (task: string) => void;
  updateTodoArray: (task: string) => void;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  todoArray: [],
  newTask: "",
  setNewTask: (task) => {
    set((state) => ({ newTask: task }));
  },
  updateTodoArray: (task) => {
    set((state) => ({
      todoArray: [task, ...state.todoArray],
    }));
  },

  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
