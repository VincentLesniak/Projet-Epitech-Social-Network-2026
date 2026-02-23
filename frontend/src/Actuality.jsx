import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";

const Actuality = () => {
  const [posts, setPosts] = useState([{ id: 1, content: "Premier post" }]);

  return (
    <>
      <Header />
      <main>
        <Addpost />
        <div>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Actuality;
