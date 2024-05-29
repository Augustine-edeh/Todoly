import { useTodoStore } from "@/store/todoStore";
import { Reorder, useDragControls } from "framer-motion"; // 103.8k (gzipped: 34k)
import DragHandle from "./DragHandle";

// todo type-face
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}
type todoItem = {
  index: number;
  todo: { id: number; task: string; isCompleted: boolean };
  isCompleted: boolean;
  value: Todo[];
};

const TodoItem = ({ index, todo, isCompleted, value }: todoItem) => {
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const toggleIsCompleted = useTodoStore((state) => state.toggleIsCompleted);

  const handleCheckChange = (e: React.FormEvent) => {};

  const controls = useDragControls();

  return (
    <Reorder.Item
      value={todo}
      key={todo.id}
      dragListener={false}
      dragControls={controls}
    >
      <div className="relative flex gap-x-5 items-center border-b-[1px] border-very-dark-grayish-blue-L px-4 py-5 select-none bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D rounded-lg shadow-lg">
        <input
          type="checkbox"
          id={String(index)}
          className="relative peer
     w-6 h-6 rounded-full bg-transparent shrink-0 checked:bg-gradient-to-br from-check-from_colour to-check-to_colour cursor-pointer hover:border-[#9c57ff]"
          checked={isCompleted}
          onChange={() => toggleIsCompleted(todo.id)}
        />
        <label
          htmlFor={String(index)}
          className="cursor-pointer peer-checked:line-through  peer-checked:text-very-dark-grayish-blue-D"
        >
          {todo.task}
        </label>

        {/* tick icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          className="absolute left-[22px] hidden peer-checked:block rounded-full cursor-pointer"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>

        {/* drag handle */}
        <DragHandle controls={controls} />

        {/* delete icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="absolute right-5 cursor-pointer"
          onClick={() => deleteTask(index)}
        >
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </Reorder.Item>
  );
};

export default TodoItem;
