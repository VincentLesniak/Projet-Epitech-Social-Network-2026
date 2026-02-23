import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";

const Actuality = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        "Bienvenue sur le nouveau fil d'actualité Connect'in ! Profitez de cet espace pour échanger avec vos collègues.",
    },
    {
      id: 2,
      content:
        "N'oubliez pas la réunion d'équipe demain à 10h en salle de conférence.",
    },
  ]);

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

        <section>
          <Addpost />
        </section>

        <section className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Actuality;
