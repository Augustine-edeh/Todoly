import { useTodoStore } from "@/store/todoStore";

const TodoItem = ({ index, task, isChecked }) => {
  const deleteTask = useTodoStore((state) => state.deleteTask);

  // const deleteTaskHandler = () => {};

  return (
    <li className="relative flex gap-x-5 items-center border-b-[1px] border-very-dark-grayish-blue-L px-4 py-5 select-none">
      {/* <input type="checkbox" className="" id={index} /> */}
      <input
        type="checkbox"
        id={index}
        className="relative peer
     w-6 h-6 rounded-full bg-transparent shrink-0 checked:bg-gradient-to-br from-check-from_colour to-check-to_colour cursor-pointer hover:border-[#9c57ff]"
        checked={false}
      />
      <label
        htmlFor={index}
        className="cursor-pointer peer-checked:line-through  peer-checked:text-very-dark-grayish-blue-D"
      >
        {task.task}
      </label>
      {/* <svg
        className="
      absolute 
      w-5 h-5
      hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg> */}

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
    </li>
  );
};

export default TodoItem;
