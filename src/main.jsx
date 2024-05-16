import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1000px] m-auto border-2 border-red-700 p-2 rounded-xl">
      <App />
    </div>
  </React.StrictMode>
);
