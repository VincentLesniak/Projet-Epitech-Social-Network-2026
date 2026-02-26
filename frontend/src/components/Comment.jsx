const Comment = () => {
  return (
    <div className="flex gap-3 mt-4 group">
      <img
        src="https://placehold.co/32"
        alt="Photo de profil"
        className="w-8 h-8 rounded-full border border-slate-100 object-cover mt-1"
      />

      <div className="flex flex-col flex-1 gap-1">
        <div className="bg-slate-100/80 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <p className="font-bold text-slate-800 text-xs">
              Nom d'utilisateur
            </p>
            <span className="text-[10px] text-slate-400 font-medium">
              Il y a 1h
            </span>
          </div>
          <p className="text-slate-700 text-sm leading-snug">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            delectus animi ipsam voluptates!
          </p>
        </div>

        <div className="flex flex-row justify-start pl-2">
          <button className="flex items-center gap-1.5 group/like">
            <div className="p-1.5 rounded-full group-hover/like:bg-pink-50 transition-colors">
              <img
                src="https://placehold.co/20"
                alt="Like"
                className="opacity-40 group-hover/like:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-xs text-slate-400 group-hover/like:text-pink-500 font-semibold transition-colors">
              12
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
