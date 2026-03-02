import { useState, useEffect } from "react";
import axios from "./api/axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Profil = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mail: "",
    birthdate: "",
    password: "",
  });
  const [userId, setUserId] = useState(null);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/user");
        setUserId(response.data.id);
        setFormData({
          first_name: response.data.first_name || "",
          last_name: response.data.last_name || "",
          mail: response.data.mail || "",
          birthdate: response.data.birthdate || "",
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "" });

    const submitData = new FormData();
    submitData.append("_method", "PUT");
    submitData.append("first_name", formData.first_name);
    submitData.append("last_name", formData.last_name);
    submitData.append("mail", formData.mail);
    submitData.append("birthdate", formData.birthdate);

    if (formData.password) {
      submitData.append("password", formData.password);
    }

    const fileInput = document.getElementById("profil_pic");
    if (fileInput && fileInput.files[0]) {
      submitData.append("profil_pic", fileInput.files[0]);
    }

    try {
      const response = await axios.post(`/users/${userId}`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFeedback({
        type: "success",
        message: response.data.message || "Profil mis à jour avec succès !",
      });
      setFormData({ ...formData, password: "" });
    } catch (error) {
      if (error.response?.status === 422) {
        setFeedback({
          type: "error",
          message: "Certains champs sont invalides.",
        });
      } else if (error.response?.status === 403) {
        setFeedback({
          type: "error",
          message: "Vous n'avez pas l'autorisation de modifier ce profil.",
        });
      } else {
        setFeedback({
          type: "error",
          message: "Une erreur serveur est survenue.",
        });
      }
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm bg-slate-50";
  const labelStyle = "text-[10px] font-bold text-slate-400 uppercase ml-1 mb-1";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-1 flex justify-center items-start p-6 md:p-12">
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-700"></div>

          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="relative flex flex-col items-center -mt-16 mb-8">
                <div className="relative group">
                  <img
                    src="https://placehold.co/120"
                    alt="Profil"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                  />
                  <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-white text-xs font-bold">
                      Changer
                    </span>
                    <input
                      type="file"
                      id="profil_pic"
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800 mt-4">
                  Mon Profil
                </h2>
                <p className="text-slate-500 text-sm">
                  Gérez vos informations personnelles
                </p>
              </div>

              {feedback.message && (
                <div
                  className={`p-4 mb-6 rounded-xl text-sm font-semibold text-center ${
                    feedback.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className={labelStyle}>Prénom</label>
                  <input
                    type="text"
                    placeholder="Prénom"
                    className={inputStyle}
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className={labelStyle}>Nom</label>
                  <input
                    type="text"
                    placeholder="Nom"
                    className={inputStyle}
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col">
                  <label className={labelStyle}>Date de naissance</label>
                  <input
                    type="date"
                    className={inputStyle}
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className={labelStyle}>Email professionnel</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className={inputStyle}
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label className={labelStyle}>Mot de passe</label>
                  <input
                    type="password"
                    placeholder="•••••••• (Laisser vide pour ne pas modifier)"
                    className={inputStyle}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
                >
                  Enregistrer les modifications
                </button>
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-all"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profil;
