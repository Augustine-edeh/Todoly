"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={30}
        height={30}
        sizes="30x30"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        type="button"
        className="rounded p-1"
        onClick={() => setTheme("light")}
      >
        <Image
          src="/icon-sun.svg"
          alt="sun icon"
          height={30}
          width={30}
          className="cursor-pointer"
        />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        type="button"
        className="rounded p-1"
        onClick={() => setTheme("dark")}
      >
        <Image
          src="/icon-moon.svg"
          alt="moon icon"
          height={30}
          width={30}
          className="cursor-pointer"
        />
      </button>
    );
  }
}
