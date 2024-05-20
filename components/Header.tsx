import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white mb-10 sm:mb-0">
      <h1 className="font-bold text-3xl">TODOLY</h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
