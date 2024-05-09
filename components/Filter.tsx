const Filter = () => {
  return (
    <div className="lg:hidden bg-lime-500 rounded">
      <div className="flex justify-center gap-x-6">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    </div>
  );
};

export default Filter;
