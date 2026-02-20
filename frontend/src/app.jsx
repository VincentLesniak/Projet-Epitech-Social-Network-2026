import { Routes, Route } from "react-router-dom";
import Log from "./log";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Log />} />
    </Routes>
  );
}

export default App;
