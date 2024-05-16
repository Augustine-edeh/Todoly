import { useCounterStore } from "@/store/store";
import Filter from "./Filter";

const InfoPanel = () => {
  const todoList = useCounterStore((state) => state.todoArray);
  return (
    <div className="flex justify-between mt-auto text-dark-grayish-blue-D bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D p-5 border-t-[0.1px] border-very-dark-grayish-blue-L rounded-b">
      <div>
        {todoList.length === 1
          ? "1 item left"
          : todoList.length > 1
          ? `${todoList.length} items left`
          : "No item left"}
      </div>

      <Filter className={"hidden md:block"} />
      <div>Clear Completed</div>
    </div>
  );
};

export default InfoPanel;
