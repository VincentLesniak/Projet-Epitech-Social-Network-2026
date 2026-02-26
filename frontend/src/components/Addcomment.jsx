const Addcomment = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <div className="flex flex-row items-center gap-3 mb-3">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-sm font-semibold text-gray-800">Nom d'utilisateur</p>
      </div>

      <input
        type="text"
        placeholder="Qu'en pensez-vous ?"
        className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />

      <div className="flex flex-row justify-end">
        <button className="bg-blue-600 text-white text-sm font-medium py-1.5 px-4 rounded-md hover:bg-blue-700 transition-all">
          Commenter
        </button>
      </div>
    </div>
  );
};

export default Addcomment;
