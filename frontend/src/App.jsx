import { Routes, Route } from "react-router-dom";
import Log from "./Log";
import Profil from "./Profil";
import Groupscreate from "./Groupscreate";
import Actuality from "./Actuality";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      <Route path="/Profil" element={<Profil />} />
      <Route path="/Groupscreate" element={<Groupscreate />} />
      <Route path="/Actuality" element={<Actuality />} />
    </Routes>
  );
}

export default App;
