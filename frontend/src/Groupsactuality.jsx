import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addpost from "./components/Addpost";
import Post from "./components/Post";
import Addgroupmember from "./components/Addgroupmember";

const Groupsactuality = () => {
  const [posts, setPosts] = useState([{ id: 1, content: "Premier post" }]);
  const [isOpen, setIsOpen] = useState(false);

  const primaryBtnClass =
    "bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const dangerBtnClass =
    "bg-white border border-gray-300 text-gray-700 font-medium py-2 px-5 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow w-full max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <img
            src="https://placehold.co/800x200"
            alt="Banniere de groupe"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-row justify-between items-center border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Nom du groupe
                </h3>
                <button className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 px-3 py-1.5 rounded-md">
                  Modifier
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt facere possimus rem ipsa sint quidem? Officiis, laborum
                in! Harum libero quidem placeat hic eveniet iusto doloremque.
                Itaque vel ipsum laudantium.
              </p>
            </div>

            <div className="flex flex-row items-center gap-4 pt-4 border-t border-gray-100">
              {!isOpen && (
                <button
                  onClick={() => setIsOpen(true)}
                  className={primaryBtnClass}
                >
                  Inviter
                </button>
              )}

              {isOpen && <Addgroupmember onClose={() => setIsOpen(false)} />}

              <button className={dangerBtnClass}>Quitter</button>
            </div>
          </div>
        </div>

        <Addpost />
        <div className="flex flex-col gap-6 mt-6">
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Groupsactuality;
