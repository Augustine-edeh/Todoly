const TodoItem = ({ index, task }) => {
  return (
    <li key={index} className="flex gap-5 items-center">
      {/* <input type="checkbox" className="" id={index} /> */}
      <input
        type="checkbox"
        id={index}
        className="relative peer
     w-5 h-5 rounded-full bg-white shrink-0 checked:bg-gradient-to-br from-check-from_colour to-check-to_colour"
      />

      {/* <svg
        className="
      absolute 
      w-5 h-5
      hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
        // className="absolute bg-yellow-300 h-5
        // w-5 roundefull"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>

      <label htmlFor={index}>{task}</label>
    </li>
  );
};

export default TodoItem;
