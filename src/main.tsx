import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./layouts/mainLayout/index.tsx";
import { Provider } from "react-redux";
import { store } from "./context/index.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommingSoon from "./pages/CommingSoon.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {process.env.NODE_ENV === "production" ? (
      <CommingSoon />
    ) : (
      <>
        <BrowserRouter>
          <Provider store={store}>
            <MainLayout>
              <App />
            </MainLayout>
          </Provider>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
      </>
    )}
  </>
);
