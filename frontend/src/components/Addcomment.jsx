const Addcomment = () => {
  return (
    <div className="flex flex-col gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src="https://placehold.co/32"
          alt="Photo de profil"
          className="w-8 h-8 rounded-full border border-slate-100 shadow-sm"
        />
        <p className="font-semibold text-slate-700 text-xs">
          Nom d'utilisateur
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Qu'en pensez-vous ?"
          className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-sm">
          Commenter
        </button>
      </div>
    </div>
  );
};

export default Addcomment;
