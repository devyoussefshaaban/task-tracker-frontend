import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./layouts/mainLayout/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);
