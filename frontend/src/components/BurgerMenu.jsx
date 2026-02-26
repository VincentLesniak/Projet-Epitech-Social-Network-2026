import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItemClass =
    "block w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors";
  const subMenuItemClass =
    "block w-full text-left px-9 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition-colors";

  return (
    <nav className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
        aria-label="Menu"
      >
        <span className="text-2xl leading-none">{isOpen ? "✕" : "☰"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 overflow-hidden">
          <ul className="py-2">
            <li>
              <Link to="/Actuality" onClick={closeMenu}>
                <button type="button" className={menuItemClass}>
                  Fil d'actualité
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profil" onClick={closeMenu}>
                <button type="button" className={menuItemClass}>
                  Profil
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Groupscreate" onClick={closeMenu}>
                <button type="button" className={menuItemClass}>
                  Groupes
                </button>
              </Link>
            </li>
            <li className="bg-gray-50/50 mt-1 pt-1 border-t border-gray-100">
              <ul>
                <li>
                  <Link to="/Groupsactuality" onClick={closeMenu}>
                    <button type="button" className={subMenuItemClass}>
                      <span className="text-gray-400 mr-2">↳</span>Epitech
                    </button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default BurgerMenu;
