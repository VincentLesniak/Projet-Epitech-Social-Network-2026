import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Log from "./Log.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Log />
  </StrictMode>,
);
