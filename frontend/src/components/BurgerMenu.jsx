import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fermer X" : "Menu ☰"}
      </button>

      {isOpen && (
        <ul>
          <li>
            <a href="#">Lien 1</a>
          </li>
          <li>
            <a href="#">Lien 2</a>
          </li>
          <li>
            <a href="#">Lien 3</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default BurgerMenu;
