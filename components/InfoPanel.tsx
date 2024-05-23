import { useTodoStore } from "@/store/todoStore";
import Filter from "./Filter";

const InfoPanel = () => {
  const todoArray = useTodoStore((state) => state.todoArray);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const unCompletedTaskCount = todoArray.filter(
    (todo) => todo.isCompleted === false
  ).length;

  return (
    <div className="flex justify-between mt-auto text-dark-grayish-blue-D bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D p-6 border-t-[0.1px] border-very-dark-grayish-blue-L rounded-b-md shadow-xl select-none">
      <div>
        {unCompletedTaskCount === 1
          ? "1 item left"
          : unCompletedTaskCount > 1
          ? `${unCompletedTaskCount} items left`
          : "No item left"}
      </div>

      <Filter className={"hidden md:block"} />

      <button
        className="cursor-pointer hover:text-very-dark-grayish-blue-L  dark:hover:text-light-grayish-blue-D_ focus:text-very-dark-grayish-blue-L dark:focus:text-light-grayish-blue-D_"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default InfoPanel;
