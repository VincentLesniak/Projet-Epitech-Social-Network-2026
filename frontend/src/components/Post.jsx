import { useState } from "react";
import Addcomment from "./Addcomment";
import Comment from "./Comment";

const Post = ({ data }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article>
      <p>{data.content}</p>

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
