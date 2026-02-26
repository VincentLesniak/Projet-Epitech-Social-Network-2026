import { useState } from "react";
import Addcomment from "./Addcomment";
import Comment from "./Comment";

const Post = ({ data }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex flex-row items-center gap-4 mb-4">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-12 h-12 rounded-full object-cover border border-gray-100"
        />
        <p className="font-semibold text-gray-800">Nom d'utilisateur</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
        nemo molestiae doloremque debitis labore error asperiores libero veniam,
        officia, ducimus nulla voluptatem repellendus animi necessitatibus
        architecto dolor modi dolorem vero.
      </p>

      <button
        onClick={() => setShowComments(!showComments)}
        className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
      >
        {showComments ? "Masquer les commentaires" : "Voir les commentaires"}
      </button>

      {showComments && (
        <section className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-6">
          <Addcomment />
          <div className="flex flex-col gap-4">
            <Comment />
          </div>
        </section>
      )}
    </article>
  );
};

export default Post;
