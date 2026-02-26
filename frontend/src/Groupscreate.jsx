import Header from "./components/Header";
import Footer from "./components/Footer";

const Groupscreate = () => {
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-800";
  const primaryBtnClass =
    "w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 border-b border-gray-100 pb-4">
            Créer un groupe
          </h2>

          <form action="groupscreate" className="flex flex-col gap-5">
            <div className="flex flex-col items-center mb-2">
              <span className="text-sm text-gray-500 mb-2 font-medium">
                Illustration du groupe
              </span>
              <input
                type="image"
                src="https://placehold.co/150"
                alt="Upload d'image"
                className="w-32 h-32 rounded-xl object-cover border-2 border-dashed border-gray-300 p-1 hover:border-blue-500 hover:bg-gray-50 transition-all cursor-pointer"
              />
            </div>

            <input
              type="text"
              placeholder="Nom du groupe"
              className={inputClass}
            />

            <input
              type="text"
              placeholder="Description"
              className={inputClass}
            />

            <button type="submit" className={primaryBtnClass}>
              Créer le groupe
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Groupscreate;
