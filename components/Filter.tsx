const Filter = ({ className }) => {
  return (
    <div className={`${className} text-dark-grayish-blue-D`}>
      <div className="flex justify-center gap-x-6">
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
        >
          All
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
        >
          Active
        </button>
        <button
          type="button"
          className="cursor-pointer focus:text-bright-blue hover:text-light-grayish-blue-D_"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Filter;
