const TodoItem = ({ index, task }) => {
  return (
    <li key={index} className="flex gap-5">
      <input type="checkbox" className="" />
      <p>{task}</p>
    </li>
  );
};

export default TodoItem;
