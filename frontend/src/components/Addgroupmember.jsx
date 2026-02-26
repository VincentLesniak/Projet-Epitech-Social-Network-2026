const Addgroupmember = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="flex flex-row justify-between items-center p-4 border-b border-gray-100 gap-4 bg-gray-50/50">
          <input
            type="text"
            placeholder="Rechercher un membre..."
            className="w-full bg-white border border-gray-200 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 font-bold text-xl px-2 transition-colors"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col p-2 overflow-y-auto">
          <li className="flex flex-row items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex flex-row items-center gap-3">
              <img
                src="https://placehold.co/50"
                alt="Photo de profil"
                className="w-10 h-10 rounded-full object-cover border border-gray-100"
              />
              <p className="font-medium text-gray-800 text-sm">
                Nom d'utilisateur
              </p>
            </div>
            <button className="text-sm bg-white border border-gray-300 text-gray-700 font-medium py-1.5 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
              Ajouter
            </button>
          </li>

          <li className="flex flex-row items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex flex-row items-center gap-3">
              <img
                src="https://placehold.co/50"
                alt="Photo de profil"
                className="w-10 h-10 rounded-full object-cover border border-gray-100"
              />
              <p className="font-medium text-gray-800 text-sm">
                Nom d'utilisateur
              </p>
            </div>
            <button className="text-sm bg-white border border-gray-300 text-gray-700 font-medium py-1.5 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
              Ajouter
            </button>
          </li>

          <li className="flex flex-row items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex flex-row items-center gap-3">
              <img
                src="https://placehold.co/50"
                alt="Photo de profil"
                className="w-10 h-10 rounded-full object-cover border border-gray-100"
              />
              <p className="font-medium text-gray-800 text-sm">
                Nom d'utilisateur
              </p>
            </div>
            <button className="text-sm bg-white border border-gray-300 text-gray-700 font-medium py-1.5 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
              Ajouter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Addgroupmember;
