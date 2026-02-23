import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";
import Addgroupmember from "./components/Addgroupmember";

const Groupsactuality = () => {
  const [posts, setPosts] = useState([{ id: 1, content: "Premier post" }]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <img src="https://placehold.co/600x400" alt="Banniere de groupe" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <h3>Nom du groupe</h3>
            <button>Modifier</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            facere possimus rem ipsa sint quidem? Officiis, laborum in! Harum
            libero quidem placeat hic eveniet iusto doloremque. Itaque vel ipsum
            laudantium.
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-start gap-4">
          {!isOpen && <button onClick={() => setIsOpen(true)}>Inviter</button>}
          {isOpen && <Addgroupmember onClose={() => setIsOpen(false)} />}
          <button>Quitter</button>
        </div>

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

export default Groupsactuality;
