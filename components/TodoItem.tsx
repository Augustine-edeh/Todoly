const TodoItem = ({ index, task }) => {
  return (
    <li key={index} className="flex gap-5">
      <input type="checkbox" className="" id={index} />
      <label htmlFor={index}>{task}</label>
    </li>
  );
};

export default TodoItem;
