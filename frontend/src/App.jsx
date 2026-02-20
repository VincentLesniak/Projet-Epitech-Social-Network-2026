import { Routes, Route } from "react-router-dom";
import Log from "./Log";
import Profil from "./Profil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
      <Route path="/Profil" element={<Profil />} />
    </Routes>
  );
}

export default App;
