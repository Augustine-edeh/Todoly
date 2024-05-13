const TodoItem = ({ index, task }) => {
  return (
    <li key={index} className="flex gap-5 items-center">
      {/* <input type="checkbox" className="" id={index} /> */}
      <input
        type="checkbox"
        id={index}
        className="
    appearance-none w-5 h-5 rounded-full bg-white
    mt- shrink-0 checked:bg-gradient-to-br from-check-from_colour to-check-to_colour"
      />

      <label htmlFor={index}>{task}</label>
    </li>
  );
};

export default TodoItem;
