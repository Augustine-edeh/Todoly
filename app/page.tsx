"use client";
import Image from "next/image";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";

import { useTodoStore } from "@/store/todoStore";

export default function Home() {
  // const count = useTodoStore((state) => state.count);
  // const increment = useTodoStore((state) => state.increment);
  // const incrementAsync = useTodoStore((state) => state.incrementAsync);
  // const decrement = useTodoStore((state) => state.decrement);
  // const todoArray = useTodoStore((state) => state.todoArray);

  return (
    <div className="flex flex-col h-screen">
      {/* Top section (background-image section) */}
      <section className="h-1/3 bg-[url('/bg-mobile-light.jpg')] dark:bg-[url('/bg-mobile-dark.jpg')] lg:bg-[url('/bg-desktop-light.jpg')] lg:dark:bg-[url('/bg-desktop-dark.jpg')] bg-no-repeat bg-cover"></section>

      {/* Bottom section */}
      <section className="flex bg-very-light-grayish-blue-L dark:bg-very-bark-blue-D h-2/3">
        <div className="mx-auto w-[21rem] sm:w-[30rem] md:w-[43rem] lg:w-[50rem] flex flex-col sm:gap-y-10 -mt-48">
          <Header />
          <Main />
          <Filter
            className={
              "md:hidden bg-very-light-gray-L dark:bg-very-dark-desaturated-blue-D rounded p-3 my-5 sm:my-0"
            }
          />
          <Footer />
        </div>
      </section>
    </div>
  );
}
