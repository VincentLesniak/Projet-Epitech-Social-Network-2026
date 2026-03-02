import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./Index.css";
import { NotificationProvider } from "./components/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* notification modal */}
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);