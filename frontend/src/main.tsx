import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./layouts/mainLayout/index.tsx";
import { Provider } from "react-redux";
import { store } from "./context/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <MainLayout>
          <App />
        </MainLayout>
    </Provider>
  </React.StrictMode>
);
