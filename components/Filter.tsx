import { useTodoStore } from "../store/todoStore";

const Filter = ({ className }) => {
  // import { useTodoStore } from '../store';

  // const { filter, setFilter, clearCompleted } = useTodoStore();
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  // const clearCompleted = useTodoStore((state) => state.clearCompleted);

  return (
    <div className={`${className} text-dark-grayish-blue-D select-none`}>
      <div className="flex justify-center gap-x-6">
        <button
          type={"button"}
          className={`cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_ ${
            filter === "all" ? "text-bright-blue" : ""
          }`}
          onClick={() => setFilter("all")}
          // disabled={filter === "all"}
        >
          All
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
          onClick={() => setFilter("active")}
          // disabled={filter === "active"}
        >
          Active
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
          onClick={() => setFilter("completed")}
          // disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
