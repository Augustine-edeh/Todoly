const Filter = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-center gap-x-6">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    </div>
  );
};

export default Filter;
