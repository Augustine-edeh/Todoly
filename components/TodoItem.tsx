const TodoItem = ({ index, task }) => {
  return (
    <li
      key={index}
      className="relative flex gap-x-5 items-center border-b-[1px] border-very-dark-grayish-blue-L px-4 py-5"
    >
      {/* <input type="checkbox" className="" id={index} /> */}
      <input
        type="checkbox"
        id={index}
        className="relative peer
     w-5 h-5 rounded-full bg-transparent shrink-0 checked:bg-gradient-to-br from-check-from_colour to-check-to_colour"
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

      {/* tick icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
        // className="absolute bg-yellow-300 h-5
        // w-5 roundefull"
        // className='absolute hidden peer-checked:block'
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>

      {/* delete icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="absolute right-5"
      >
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>

      <label htmlFor={index}>{task}</label>
    </li>
  );
};

export default TodoItem;
