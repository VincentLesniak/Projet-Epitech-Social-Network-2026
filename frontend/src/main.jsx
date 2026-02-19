import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Log from "./log.jsx";
import Register from "./register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Log />
  </StrictMode>,
);
