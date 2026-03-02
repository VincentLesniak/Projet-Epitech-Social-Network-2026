import { useState } from "react";
import axios from "../api/axios";
import Addcomment from "./Addcomment";
import Comment from "./Comment";

const Post = ({ data, currentUser }) => {
  const [showComments, setShowComments] = useState(false);
  const [localComments, setLocalComments] = useState(data.comments || []);

  const [likesCount, setLikesCount] = useState(data.likers_count || 0);
  const [isLiked, setIsLiked] = useState(!!data.is_liked_by_user);
  const [isLiking, setIsLiking] = useState(false);

  const { message, created_at, user, id } = data;

  const fullName = user
    ? `${user.first_name} ${user.last_name}`
    : "Utilisateur inconnu";
  const avatarUrl = user?.profil_pic
    ? `http://localhost:8000/storage/${user.profil_pic}`
    : `https://ui-avatars.com/api/?name=${fullName}&background=random`;
  const dateFormatted = new Date(created_at).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  // FONCTION DE LIKE
  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);

    try {
      const response = await axios.post(`/posts/${id}/like`);

      setIsLiked(response.data.is_liked);
      setLikesCount(response.data.likes_count);
    } catch (error) {
      console.error("Erreur lors du like :", error);
    } finally {
      setIsLiking(false);
    }
  };
  const handleCommentAdded = (newComment) => {
    setLocalComments((prev) => [...prev, newComment]);
  };

  return (
    <article className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6 overflow-hidden">
      <div className="flex items-center gap-3 p-4">
        <img
          src={avatarUrl}
          alt={fullName}
          className="w-10 h-10 rounded-full object-cover border border-slate-100"
        />
        <div>
          <p className="font-bold text-slate-800 text-sm hover:underline cursor-pointer leading-tight">
            {fullName}
          </p>
          <p className="text-slate-500 text-xs">{dateFormatted}</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
          {message}
        </p>
      </div>

      <div className="px-4 py-2 border-t border-slate-50 bg-slate-50/50 flex justify-between items-center">
        <button
          onClick={() => setShowComments(!showComments)}
          className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          <span className="text-xs">{showComments ? "▲" : "▼"}</span>
          {showComments
            ? "Masquer les commentaires"
            : `Voir les commentaires ${localComments.length > 0 ? `(${localComments.length})` : ""}`}
        </button>

        {/* COMPTEUR DE LIKE*/}
        <button
          onClick={handleLike}
          disabled={isLiking}
          className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all active:scale-90 ${
            isLiked
              ? "bg-pink-50 border-pink-100 text-pink-600"
              : "bg-white border-slate-100 text-slate-400 hover:border-pink-100 hover:text-pink-500"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-transform ${isLiked ? "fill-current scale-110" : "fill-none stroke-current"}`}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs font-bold">{likesCount}</span>
        </button>
      </div>

      {/* SECTION COMMENTAIRES */}
      {showComments && (
        <section className="bg-slate-50/30 border-t border-slate-100 p-4 space-y-4">
          <Addcomment
            postId={id}
            onCommentAdded={handleCommentAdded}
            user={currentUser}
          />
          <div className="space-y-4 mt-4">
            {localComments.length > 0 ? (
              localComments.map((comment) => (
                <Comment key={comment.id} data={comment} />
              ))
            ) : (
              <p className="text-center text-slate-400 text-xs py-4 italic">
                Aucun commentaire pour le moment.
              </p>
            )}
          </div>
        </section>
      )}
    </article>
  );
};

export default Post;
