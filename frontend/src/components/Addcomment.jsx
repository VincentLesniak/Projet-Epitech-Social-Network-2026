const Addcomment = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <img src="https://placehold.co/50" alt="Photo de profil" />
        <p>Nom d'utilisateur</p>
      </div>
      <input type="text" placeholder="Qu'en pensez vous?" />
      <div className="flex flex-row justify-end">
        <button>Commenter</button>
      </div>
    </div>
  );
};

export default Addcomment;
