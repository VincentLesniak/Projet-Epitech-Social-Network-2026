const Comment = ({ data }) => {
  const { message, created_at, user } = data;

  const fullName = user
    ? `${user.first_name} ${user.last_name}`
    : "Utilisateur inconnu";

  const avatarUrl = user?.profil_pic
    ? `http://localhost:8000/storage/${user.profil_pic}`
    : `https://ui-avatars.com/api/?name=${fullName}&background=random`;

  // Formatage de l'heure
  const timeFormatted = new Date(created_at).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-3 mt-4 group">
      <img
        src={avatarUrl}
        alt={`Photo de ${fullName}`}
        className="w-8 h-8 rounded-full border border-slate-100 object-cover mt-1"
      />

      <div className="flex flex-col flex-1 gap-1">
        <div className="bg-slate-100/80 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
          <div className="flex justify-between items-center mb-1">
            <p className="font-bold text-slate-800 text-[11px] hover:underline cursor-pointer">
              {fullName}
            </p>
            <span className="text-[10px] text-slate-400 font-medium">
              {timeFormatted}
            </span>
          </div>
          <p className="text-slate-700 text-sm leading-snug">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
