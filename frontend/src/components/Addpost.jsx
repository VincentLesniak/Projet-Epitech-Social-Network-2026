const Addpost = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
      <div className="flex flex-row items-center gap-4 mb-4">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-12 h-12 rounded-full object-cover border border-gray-100"
        />
        <p className="font-semibold text-gray-800">Nom d'utilisateur</p>
      </div>

      <input
        type="text"
        placeholder="Quoi de neuf ?"
        className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
      />

      <div className="flex flex-row justify-end">
        <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
          Publier
        </button>
      </div>
    </div>
  );
};

export default Addpost;
