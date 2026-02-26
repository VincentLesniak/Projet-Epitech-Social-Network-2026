const Comment = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex flex-row items-center gap-3 mb-2">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="text-sm font-semibold text-gray-800">Nom d'utilisateur</p>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        delectus animi ipsam voluptates! Cum facilis quibusdam repudiandae amet
        nulla quos nam vero. Et consequuntur praesentium eaque doloremque ipsam
        aspernatur ad!
      </p>

      <div className="flex flex-row justify-end mt-2">
        <button
          className="hover:opacity-70 transition-opacity"
          aria-label="Aimer ce commentaire"
        >
          <img
            src="https://placehold.co/20"
            alt="Like"
            className="w-4 h-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        </button>
      </div>
    </div>
  );
};

export default Comment;
