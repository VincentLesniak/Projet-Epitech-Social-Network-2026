import { useState, useEffect } from "react";
import axios from "./api/axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";

const Actuality = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Récupération de user
  useEffect(() => {
    axios
      .get("/user")
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération de l'utilisateur :", err);
      });
  }, []);

  // Récupération des posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Impossible de charger les posts :", error);
      }
    };

    fetchPosts();
  }, []);

  // maj de la liste après création d'un post
  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Fil d'actualité</h2>
          <p className="text-slate-500 text-sm">
            Découvrez les dernières nouvelles de votre réseau.
          </p>
        </header>

        <section className="mb-8">
          <Addpost onPostCreated={handlePostCreated} user={currentUser} />
        </section>

        <section className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} data={post} currentUser={currentUser} />
          ))}

          {posts.length === 0 && (
            <p className="text-center text-slate-400 py-10">
              Aucun message à afficher.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Actuality;
