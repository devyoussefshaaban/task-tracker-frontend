import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./layouts/mainLayout/index.tsx";
import { Provider } from "react-redux";
import { store } from "./context/index.ts";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <App />
      </MainLayout>
    </Provider>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover
    theme="light"
    />
  </React.StrictMode>
);
