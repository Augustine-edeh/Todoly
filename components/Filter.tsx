"use client";
import { useTodoStore } from "../store/todoStore";

interface FilterProps {
  className: string;
}
const Filter = ({ className }: FilterProps) => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  return (
    <div className={`${className} text-dark-grayish-blue-D select-none`}>
      <div className="flex justify-center gap-x-6">
        <button
          type={"button"}
          className={`cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_ ${
            filter === "all" ? "text-bright-blue" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
