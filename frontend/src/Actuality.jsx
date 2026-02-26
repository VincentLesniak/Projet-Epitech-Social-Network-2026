import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";

const Actuality = () => {
  const [posts, setPosts] = useState([{ id: 1, content: "Premier post" }]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-2xl mx-auto px-4 py-8">
        <Addpost />
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Actuality;
