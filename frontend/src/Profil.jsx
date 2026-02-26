import Header from "./components/Header";
import Footer from "./components/Footer";

const Profil = () => {
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-800";
  const primaryBtnClass =
    "w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2";
  const secondaryBtnClass =
    "px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 border-b border-gray-100 pb-4">
            Mon profil
          </h2>

          <form
            action="profil"
            className="flex flex-col justify-center items-center gap-4 w-full"
          >
            <input
              type="image"
              src="https://placehold.co/100"
              alt="Photo de profil"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 shadow-sm hover:opacity-80 transition-opacity mb-2"
            />

            <div className="flex gap-4 w-full">
              <input type="text" placeholder="Prénom" className={inputClass} />
              <input type="text" placeholder="Nom" className={inputClass} />
            </div>
            <input type="date" className={inputClass} />
            <input type="text" placeholder="Email" className={inputClass} />
            <input
              type="password"
              placeholder="Mot de passe"
              className={inputClass}
            />

            <button type="submit" className={primaryBtnClass}>
              Valider modification
            </button>
          </form>

          <div className="flex flex-row justify-center mt-6 pt-6 border-t border-gray-100">
            <button className={secondaryBtnClass}>Modifier le profil</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profil;
