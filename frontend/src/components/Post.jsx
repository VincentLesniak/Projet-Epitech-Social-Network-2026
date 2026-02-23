import { useState } from "react";
import Addcomment from "./Addcomment";
import Comment from "./Comment";

const Post = ({ data }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article>
      <div className="flex flex-row gap-4">
        <img src="https://placehold.co/50" alt="Photo de profil" />
        <p>Nom d'utilisateur</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
        nemo molestiae doloremque debitis labore error asperiores libero veniam,
        officia, ducimus nulla voluptatem repellendus animi necessitatibus
        architecto dolor modi dolorem vero.
      </p>

      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Masquer les commentaires" : "Voir les commentaires"}
      </button>

      {showComments && (
        <section>
          <Addcomment />
          <Comment />
        </section>
      )}
    </article>
  );
};

export default Post;
