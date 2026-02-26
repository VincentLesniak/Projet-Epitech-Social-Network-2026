import Title from "./Title";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between relative bg-white px-6 py-4 shadow-sm border-b border-gray-200">
      <Title />
      <BurgerMenu />
    </header>
  );
};
export default Header;
