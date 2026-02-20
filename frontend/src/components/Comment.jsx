const Comment = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <img src="https://placehold.co/50" alt="Photo de profil" />
        <p>Nom d'utilisateur</p>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        delectus animi ipsam voluptates! Cum facilis quibusdam repudiandae amet
        nulla quos nam vero. Et consequuntur praesentium eaque doloremque ipsam
        aspernatur ad!
      </p>
      <div className="flex flex-row justify-end">
        <img src="https://placehold.co/20" alt="Like" />
      </div>
    </div>
  );
};

export default Comment;
