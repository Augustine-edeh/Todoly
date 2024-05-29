import { useState } from "react";

const DragHandle = ({ controls }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className="text-very-dark-grayish-blue-D_ absolute right-14 cursor-grab"
      onPointerDown={(e) => controls.start(e)}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 12L4 4m0 0v4m0-4h4m4 8l8-8m0 0v4m0-4h-4m-4 8l-8 8m0 0v-4m0 4h4m4-8l8 8m0 0v-4m0 4h-4"
      />
    </svg>
  );
};

export default DragHandle;
