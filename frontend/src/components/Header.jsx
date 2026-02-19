import Title from "./Title";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="flex flex-row justify-center items-center">
      <Title />
      <BurgerMenu />
    </header>
  );
};
export default Header;
