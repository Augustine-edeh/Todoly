import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Image
        src={"/bg-mobile-light.jpg"}
        width={500}
        height={500}
        alt="bg-image"
        className="bg-red-400 h-1/3 bg-[url('/bg-mobile-light.jpg')] w-full"
      />
      <section className="flex bg-blue-400 h-2/3">
        <main className="mx-auto  w-[20rem] sm:w-[30rem] md:w-[60rem] flex flex-col gap-y-10 -mt-48">
          <div className=" flex justify-between items-center text-white">
            <h1 className=" font-bold">TODO</h1>
            <button type="button">
              <Image
                src={"./icon-moon.svg"}
                width={30}
                height={30}
                alt="Theme icon"
              />
            </button>
          </div>
          <div>
            <input
              type="text"
              className="w-full rounded py-2 px-5 outline-none"
            />
          </div>

          <ul className="bg-white flex flex-col gap-y-5 overflow-y-scroll p-3 rounded">
            <li className="flex">
              <input type="radio" />
              <p></p>List 1
            </li>
            <li className="flex">
              <input type="radio" />
              <p></p>List 2
            </li>
            <li className="flex">
              <input type="radio" />
              <p></p>List 3
            </li>
            <li className="flex">
              <input type="radio" />
              <p></p>List 4
            </li>
            <li className="flex">
              <input type="radio" />
              <p></p>List 5
            </li>
          </ul>
        </main>
      </section>
    </div>
  );
}
