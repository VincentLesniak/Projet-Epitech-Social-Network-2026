import { useState } from "react";
import Title from "./components/Title";
import Footer from "./components/Footer";

const AuthManager = () => {
  const [mode, setMode] = useState("login");

  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm bg-slate-50";
  const btnPrimary =
    "w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-2";
  const btnLink =
    "text-sm text-slate-500 hover:text-blue-600 transition-colors mt-2";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="p-8 flex justify-center">
        <Title />
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          {mode === "login" ? (
            <form className="flex flex-col gap-5">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold text-slate-800">
                  Bon retour !
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Connectez-vous pour voir les nouveautés.
                </p>
              </div>

              <input type="text" placeholder="Email" className={inputStyle} />
              <input
                type="password"
                placeholder="Mot de passe"
                className={inputStyle}
              />

              <button type="submit" className={btnPrimary}>
                Connexion
              </button>

              <div className="flex flex-col items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={btnLink}
                >
                  Pas encore de compte ?{" "}
                  <span className="text-blue-600 font-semibold">
                    S'inscrire
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode("forgot")}
                  className="text-xs text-slate-400 hover:underline"
                >
                  Mot de passe oublié ?
                </button>
              </div>
            </form>
          ) : mode === "forgot" ? (
            <form className="flex flex-col gap-5">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold text-slate-800">
                  Récupération
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Saisissez vos infos pour réinitialiser.
                </p>
              </div>

              <input type="text" placeholder="Email" className={inputStyle} />
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                  Date de naissance
                </label>
                <input type="date" className={inputStyle} />
              </div>

              <button type="submit" className={btnPrimary}>
                Recevoir le lien
              </button>

              <button
                type="button"
                onClick={() => setMode("login")}
                className={btnLink}
              >
                Retour à la connexion
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-4">
              <div className="text-center mb-4">
                <h2 className="text-2xl font-extrabold text-slate-800">
                  Rejoindre Connect'in
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Créez votre profil en quelques secondes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  className={inputStyle}
                />
                <input type="text" placeholder="Nom" className={inputStyle} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                  Date de naissance
                </label>
                <input type="date" className={inputStyle} />
              </div>
              <input
                type="text"
                placeholder="Email professionnel"
                className={inputStyle}
              />
              <input
                type="password"
                placeholder="Choisir un mot de passe"
                className={inputStyle}
              />

              <button type="submit" className={btnPrimary}>
                Créer mon compte
              </button>

              <button
                type="button"
                onClick={() => setMode("login")}
                className={btnLink}
              >
                Déjà un compte ?{" "}
                <span className="text-blue-600 font-semibold">
                  Se connecter
                </span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthManager;
