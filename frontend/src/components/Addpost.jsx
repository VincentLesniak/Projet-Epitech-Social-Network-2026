const Addpost = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-10 h-10 rounded-full border border-slate-100 object-cover"
        />
        <p className="font-semibold text-slate-700 text-sm">
          Nom d'utilisateur
        </p>
      </div>

      <div className="relative">
        <textarea
          rows="3"
          placeholder="Quoi de neuf ?"
          className="w-full p-3 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
        />
      </div>

      <div className="flex flex-row justify-end mt-3 pt-3 border-t border-slate-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-blue-200 active:scale-95">
          Publier
        </button>
      </div>
    </div>
  );
};

export default Addpost;
