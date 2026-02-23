const Addgroupmember = ({ onClose }) => {
  return (
    <div className="fixed z-10 w-full h-full bg-gray-400 top-0">
      <div className="flex flex-row justify-between">
        <input type="text" placeholder="Rechercher" />
        <button onClick={onClose}>X</button>
      </div>
      <ul>
        <li className="flex flex-row justify-evenly w-full">
          <img src="https://placehold.co/50" alt="Photo de profil" />
          <p>Nom d'utilisateur</p>
          <button>Ajouter</button>
        </li>
        <li className="flex flex-row justify-evenly">
          <img src="https://placehold.co/50" alt="Photo de profil" />
          <p>Nom d'utilisateur</p>
          <button>Ajouter</button>
        </li>
        <li className="flex flex-row justify-evenly">
          <img src="https://placehold.co/50" alt="Photo de profil" />
          <p>Nom d'utilisateur</p>
          <button>Ajouter</button>
        </li>
      </ul>
    </div>
  );
};

export default Addgroupmember;
