import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white mb-10 sm:mb-0">
      <h1 className="font-bold text-3xl">TODO</h1>
      <button type="button">
        <Image
          src={"./icon-moon.svg"}
          width={30}
          height={30}
          alt="theme icon"
        />
      </button>
    </header>
  );
};

export default Header;
