import { useState } from "react";
import Title from "./components/Title";
import Footer from "./components/Footer";

const AuthManager = () => {
  const [mode, setMode] = useState("login");

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";
  const primaryBtnClass =
    "w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2";
  const secondaryBtnClass =
    "text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors";
  const h2Class = "text-2xl font-bold text-gray-800 text-center mb-6";

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="p-6 flex justify-center sm:justify-start">
        <Title />
      </div>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
          {mode === "login" ? (
            <form className="flex flex-col justify-center items-center gap-4">
              <h2 className={h2Class}>Connexion</h2>
              <input type="text" placeholder="Email" className={inputClass} />
              <input
                type="password"
                placeholder="Mot de passe"
                className={inputClass}
              />
              <button type="submit" className={primaryBtnClass}>
                Se connecter
              </button>

              <div className="flex flex-col items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={secondaryBtnClass}
                >
                  Pas de compte ? S'inscrire !
                </button>
                <button
                  type="button"
                  onClick={() => setMode("forgot")}
                  className={secondaryBtnClass}
                >
                  Mot de passe oublié ?
                </button>
              </div>
            </form>
          ) : mode === "forgot" ? (
            <form className="flex flex-col justify-center items-center gap-4">
              <h2 className={h2Class}>Récupération</h2>
              <input type="text" placeholder="Email" className={inputClass} />
              <input type="date" className={inputClass} />
              <button type="submit" className={primaryBtnClass}>
                Recevoir le lien
              </button>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={secondaryBtnClass}
                >
                  Retour à la connexion
                </button>
              </div>
            </form>
          ) : (
            <form className="flex flex-col justify-center items-center gap-4">
              <h2 className={h2Class}>Inscription</h2>
              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  placeholder="Prénom"
                  className={inputClass}
                />
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
                S'inscrire
              </button>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={secondaryBtnClass}
                >
                  Déjà un compte ? Se connecter
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthManager;
