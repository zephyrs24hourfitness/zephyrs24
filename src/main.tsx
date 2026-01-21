// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App"; // because your App.tsx is in the repo root

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
