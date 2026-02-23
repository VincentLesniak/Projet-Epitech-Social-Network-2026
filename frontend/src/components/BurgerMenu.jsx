import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "☰"}</button>

      {isOpen && (
        <ul className="absolute right-0 top-full z-10 w-full bg-white">
          <li>
            <Link to="/Actuality" onClick={closeMenu}>
              <button type="button">Fil d'actualité</button>
            </Link>
          </li>
          <li>
            <Link to="/profil" onClick={closeMenu}>
              <button type="button">Profil</button>
            </Link>
          </li>
          <li>
            <Link to="/Groupscreate" onClick={closeMenu}>
              <button type="button">Groupes</button>
            </Link>
          </li>
          <ul>
            <li>
              <Link to="/Groupsactuality" onClick={closeMenu}>
                <button type="button">Epitech</button>
              </Link>
            </li>
          </ul>
        </ul>
      )}
    </nav>
  );
};

export default BurgerMenu;
