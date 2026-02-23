import Title from "./Title";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between relative">
      <Title />
      <BurgerMenu />
    </header>
  );
};
export default Header;
