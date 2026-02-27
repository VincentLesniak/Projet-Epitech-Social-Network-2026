import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Log from "./Log";
import Profil from "./Profil";
import Groupscreate from "./Groupscreate";
import Actuality from "./Actuality";
import Groupsactuality from "./Groupsactuality";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="antialiased text-slate-900 font-sans">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/Log" element={<Log />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Groupscreate" element={<Groupscreate />} />
        <Route path="/Actuality" element={<Actuality />} />
        <Route path="/Groupsactuality" element={<Groupsactuality />} />
      </Routes>
    </div>
  );
}

export default App;
