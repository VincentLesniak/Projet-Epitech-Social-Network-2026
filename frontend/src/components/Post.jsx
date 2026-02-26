import { useState } from "react";
import Addcomment from "./Addcomment";
import Comment from "./Comment";

const Post = ({ data }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="flex items-center gap-3 p-4">
        <img
          src="https://placehold.co/50"
          alt="Photo de profil"
          className="w-10 h-10 rounded-full object-cover border border-slate-100"
        />
        <div>
          <p className="font-bold text-slate-800 text-sm hover:underline cursor-pointer">
            Nom d'utilisateur
          </p>
          <p className="text-slate-500 text-xs">Il y a 2 heures</p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <p className="text-slate-700 leading-relaxed text-sm">
          {data.content ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nemo molestiae doloremque debitis labore error asperiores libero veniam..."}
        </p>
      </div>

      <div className="px-4 py-2 border-t border-slate-50 bg-slate-50/50">
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          <span className="text-lg">{showComments ? "▲" : "▼"}</span>
          {showComments
            ? "Masquer les commentaires"
            : "Voir les commentaires (12)"}
        </button>
      </div>

      {showComments && (
        <section className="bg-slate-50/30 border-t border-slate-100 p-4 space-y-4">
          <Addcomment />
          <div className="space-y-4 mt-4">
            <Comment />
            <Comment />
          </div>
        </section>
      )}
    </article>
  );
};

export default Post;
