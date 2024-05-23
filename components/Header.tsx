import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white">
      <h1 className="font-bold text-3xl">TODOLY</h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
